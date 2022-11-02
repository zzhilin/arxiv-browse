"""Document cache service."""
import os
import re
from functools import wraps
from typing import Optional

from arxiv.base.globals import get_application_config, get_application_global
from browse.domain.metadata import DocMetadata, Identifier


# Formats that currently reside in the cache filesystem
CACHE_FORMATS = ['dvi', 'html', 'other', 'pdf', 'ps']


class DocumentCacheException(Exception):
    """Error class for general arXiv document cache exceptions."""

    pass


class DocumentCacheFormatException(Exception):
    """Error class for invalid document catch format exceptions."""

    pass


class DocumentCacheSession():
    """Document cache session class."""

    def __init__(self, document_cache_path: str) -> None:
        """Initialize the document cache session."""
        if not os.path.isdir(document_cache_path):
            raise DocumentCacheException('Path to document cache '
                                         f'{document_cache_path} does '
                                         'not exist')
        self.document_cache_path = os.path.realpath(document_cache_path)

    def get_cache_file_path(self, docmeta: DocMetadata, cache_format: str)\
            -> Optional[str]:
        """Get the absolute path of the cache file/directory if it exists."""
        cache_file_path = self.cache_file_path_for_id(docmeta.arxiv_identifier, cache_format, version=docmeta.version)
        if cache_file_path and os.path.isfile(cache_file_path):
            return cache_file_path
        else:
            return None

    def cache_file_path_for_id(self, identifier: Identifier, cache_format: str, version: int=0)\
            -> str:
        """Get the absolute path of the cache file/directory if it exists.

        Parameters
        ----------
        identifier : Identifier
        cache_format : str
        version : Version from `identifier` is used unless this is non-zero. Must be > 0 if passed.

        Returns
        -------
        Optional[str]

        Path to dissemination file. Returns the path if the file exists or if it does not exist.
        """
        if cache_format not in CACHE_FORMATS:
            raise DocumentCacheFormatException(f'Invalid cache file format: {cache_format}')

        if not version:
            if identifier.has_version and identifier.version > 0:
                version = identifier.version
            else:
                raise DocumentCacheException('Identifier lacked version')

        archive = ('arxiv' if not identifier.is_old_id or
                   identifier.archive is None else identifier.archive)

        parent_path = os.path.join(
            self.document_cache_path,
            archive,
            cache_format,
            identifier.yymm,
            f'{identifier.filename}v{version}'
        )
        if cache_format == 'html' and os.path.isdir(parent_path):
            return parent_path  # HTML is directory-based

        extension = f'.{cache_format}'
        if re.match(r'^other', cache_format):
            extension = '.ps.gz'
        elif type == 'ps':
            extension = f'.gz'

        return f'{parent_path}{extension}'


@wraps(DocumentCacheSession.get_cache_file_path)
def get_cache_file_path(docmeta: DocMetadata, format: str) -> Optional[str]:
    """Get the absolute path of the cache file/directory if it exists."""
    return current_session().get_cache_file_path(docmeta, format)


def get_session(app: object = None) -> DocumentCacheSession:
    """Get a new session with the document cache service."""
    config = get_application_config(app)
    document_cache_path = config.get('DOCUMENT_CACHE_PATH', None)
    return DocumentCacheSession(document_cache_path)


def current_session() -> DocumentCacheSession:
    """Get/create :class:`.DocumentCacheSession` for this context."""
    g = get_application_global()
    if not g:
        return get_session()
    if 'doc_cache' not in g:
        g.doc_cache = get_session()
    assert isinstance(g.doc_cache, DocumentCacheSession)
    return g.doc_cache


def cache_file_path_for_id(identifier: Identifier, cache_format: str, version: int=0)\
    -> str:
    """Get the absolute path of the cache file/directory if it exists.

        Parameters
        ----------
        identifier : Identifier
        cache_format : str
        version : Version from `identifier` is used unless this is non-zero. Must be > 0 if passed.

        Returns
        -------
        Optional[str]

        Path to dissemination file. Returns the path if the file exists or if it does not exist.
        """
    return current_session().cache_file_path_for_id(identifier, cache_format, version)
