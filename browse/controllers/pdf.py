"""Handels download of PDFs."""
import math

from pathlib import Path

from time import perf_counter

import logging

log = logging.getLogger(__file__)
log.setLevel(logging.DEBUG)

import requests

from flask import Response, redirect, current_app, abort

from browse.controllers.cdn_redirect import cdn_url, is_cdn_fresh
from browse.domain.identifier import Identifier, IdentifierException
from browse.services.document.cache import cache_file_path_for_id
from browse.services.document.metadata import get_abs

def _is_cdn_enabled() -> bool:
    return bool(current_app.config.get('CDN_ENABLED'))

def _pdf_main_url() -> str:
    return current_app.config.get('DOWNLOAD_FALLBACK_URL') # type: ignore


def _mtime_for_id(format: str, id:Identifier) -> int:
    path = Path(cache_file_path_for_id(id, format))
    if path.exists():
        return math.ceil(path.stat().st_mtime)
    else:
        raise RuntimeError(f'File {path} does not exist')

def _reverse_proxy(url: str) -> Response:
    """Reverse proxy the URL to the client as a reponse."""
    resp = requests.get(url, stream=True)
    log.debug("Reverse proxy to %s status %s", url, resp.status_code if resp else 'no-resp')

    # Need to exclude some headers otherwise they seem to have double
    # values when making the Reponse.
    excluded_headers = ['content-encoding', 'content-length',
    'transfer-encoding', 'connection']

    headers = [(name, value) for (name, value) in
               resp.raw.headers.items() if name.lower() not in
               excluded_headers]

    chunk_size=current_app.config.get('DOWNLOAD_FALLBACK_CHUNK_SIZE')
    def _stream():  #type: ignore
        for chunk in resp.iter_content(chunk_size=chunk_size):
            yield chunk

    response = Response(_stream(), status=resp.status_code, headers=headers)
    return response

def pdf(arxiv_id:str):  # type: ignore
    """Endpoint to download a PDF."""
    start = perf_counter()

    try:
        id = Identifier(arxiv_id)
    except IdentifierException:
        abort(404)

    # TODO Handle HEAD
    # Probably about the same thing? Maybe we can save the head used
    # to check the CDN and send that?

    format = 'pdf'
    try:
        if _is_cdn_enabled():
            if not id.has_version:
                start_load_v=perf_counter()
                metadata = get_abs(arxiv_id)
                id.has_version = True
                id.version = metadata.highest_version()
                log.debug('sec to load v: %f', perf_counter() - start_load_v)

            arxiv_mtime = _mtime_for_id(format, id)
            url = cdn_url(format, id)
            log.debug('sec so far %f', perf_counter() - start)

            start_fresh = perf_counter()
            fresh = is_cdn_fresh(url, arxiv_mtime)
            log.debug('sec to check cdn %f', perf_counter() - start_fresh)

            if fresh:
                log.debug('CDN is fresh for url %s, total time: %f sec', url, perf_counter() - start)
                return redirect(url, code=302)
            else:
                log.debug('CDN was not fresh for url %s', url)

    except Exception as ex:
        log.warning("Problem while chekcing CDN for %s: %s", arxiv_id, ex)

    log.debug("just before rev proxy %f sec total", perf_counter() - start)
    return _reverse_proxy(f"{_pdf_main_url()}/{arxiv_id}")
