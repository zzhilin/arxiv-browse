from unittest import mock, TestCase

from datetime import datetime
from browse.controllers.pdf import what_to_do, cdn_url, get_cdn_mtime

from flask import Response

from app import app

class PdfTest(TestCase):

    def setUp(self):
        app.testing = True
        app.config['APPLICATION_ROOT'] = ''
        app.config['CDN_ENABLED'] = True
        app.config['DOWNLOAD_FALLBACK_URL'] = 'http://arxiv.org/pdf/'
        app.config['CDN_HOST'] = 'cdn.arxiv.org'
        
        self.app = app.test_client()

    def test_what_to_do(self) -> None: 
        FAKE_URL='https://example.com/2001.00001v1.pdf'
        MORE_EARLIER = datetime(1999, 1, 1)
        EARLIER = datetime(2020, 1, 1)
        LATER = datetime(2022,6,6)
        MORE_LATER = datetime(2033,12,31)

        assert 'SERVE_CDN' == what_to_do(None, None, FAKE_URL, lambda _: datetime.now())

        assert 'SERVE_CDN' == what_to_do(None, EARLIER, FAKE_URL, lambda _: datetime.now())
        assert 'RECOMPILE_SRC' == what_to_do(None, EARLIER, FAKE_URL, lambda _: datetime.now(), favor_cdn=False)

        assert 'SERVE_CDN' == what_to_do(None, LATER, FAKE_URL, lambda _ : datetime.now())
        assert 'RECOMPILE_SRC' == what_to_do(None, LATER, FAKE_URL, lambda _ : datetime.now(), favor_cdn=False)

        assert 'NO_SRC' == what_to_do(None, None, FAKE_URL, lambda _ : None)
        assert 'NO_SRC' == what_to_do(None, None, '', lambda _ : None)
        assert 'NO_SRC' == what_to_do(None, None, None, lambda _ : None)  # type: ignore

        assert 'SERVE_CDN' == what_to_do(EARLIER, LATER, FAKE_URL, lambda _ : datetime.now())
        assert 'RECOMPILE_SRC' == what_to_do(EARLIER, LATER, FAKE_URL, lambda _ : datetime.now(), favor_cdn=False)

        assert 'RECOMPILE_SRC' == what_to_do(EARLIER, LATER, FAKE_URL, lambda _ : None)
        assert 'RECOMPILE_SRC' == what_to_do(EARLIER, LATER, None, lambda _ : None)  # type: ignore

        assert 'SERVE_CDN' == what_to_do(EARLIER, LATER, None, lambda _ : datetime.now())  # type: ignore
        assert 'RECOMPILE_SRC' == what_to_do(EARLIER, LATER, None, lambda _ : datetime.now(), favor_cdn=False)  # type: ignore

        assert 'SERVE_ARXIV' == what_to_do(LATER, EARLIER, None, lambda _ : None)  # type: ignore
        assert 'SERVE_ARXIV' == what_to_do(LATER, EARLIER, FAKE_URL, None)  # type: ignore
        assert 'SERVE_ARXIV' == what_to_do(LATER, EARLIER, None, None)  # type: ignore
        assert 'SERVE_ARXIV' == what_to_do(LATER, EARLIER, '', None)  # type: ignore

        assert 'SERVE_CDN' == what_to_do(LATER, EARLIER, FAKE_URL, lambda _ : MORE_LATER)
        assert 'SERVE_CDN' == what_to_do(LATER, EARLIER, FAKE_URL, lambda _ : LATER)
        assert 'SERVE_ARXIV' == what_to_do(LATER, EARLIER, FAKE_URL, lambda _ : MORE_EARLIER)
        assert 'SERVE_ARXIV' == what_to_do(LATER, EARLIER, FAKE_URL, lambda _ : None)

    @mock.patch('browse.controllers.pdf.what_to_do')
    def test_pdf_contrller(self, what_to_do_mock) -> None:
        what_to_do_mock.return_value = 'SERVE_CDN'
        # test current version
        rv = self.app.get('/pdf/0801.1021.pdf')
        assert rv.status_code == 302
        assert rv.headers.get('Location') == 'https://cdn.arxiv.org/pdf/arxiv/0801.1021v4.pdf'
        
        # test version number
        rv = self.app.get('/pdf/0801.1021v3.pdf')
        assert rv.status_code == 302
        assert rv.headers.get('Location') == 'https://cdn.arxiv.org/pdf/arxiv/0801.1021v3.pdf'

        rv = self.app.get('/pdf/0801.1021v1.pdf')
        assert rv.status_code == 302
        assert rv.headers.get('Location') == 'https://cdn.arxiv.org/pdf/arxiv/0801.1021v1.pdf'

        # test not found current version, no .abs
        rv = self.app.get('/pdf/2001.1021.pdf')
        assert rv.status_code == 404

        # test not found version number, no .abs
        rv = self.app.get('/pdf/2001.1021v1.pdf')
        assert rv.status_code == 404
        rv = self.app.get('/pdf/2001.1021v3.pdf')
        assert rv.status_code == 404

        # test not found version number, no up to that version
        rv = self.app.get('/pdf/0801.1021v30.pdf')
        assert rv.status_code == 404

        
    @mock.patch('browse.controllers.pdf.what_to_do')
    @mock.patch('browse.controllers.pdf._reverse_proxy')
    def test_pdf_contrller_rproxy(self, rproxy_mock, what_to_do_mock) -> None:
        what_to_do_mock.return_value='SERVE_ARXIV'
        rproxy_mock.return_value=Response('mocked rev proxy', status=200, headers=[])
        # mock and test rev_proxy
        # test current version
        rv = self.app.get('/pdf/0801.1021.pdf')
        assert rv.status_code == 200
        assert rv.get_data(as_text=True) == 'mocked rev proxy'
        
        # test version number
        rv = self.app.get('/pdf/0801.1021v3.pdf')
        assert rv.status_code == 200
        assert rv.get_data(as_text=True) == 'mocked rev proxy'

        rv = self.app.get('/pdf/0801.1021v1.pdf')
        assert rv.status_code == 200
        assert rv.get_data(as_text=True) == 'mocked rev proxy'

