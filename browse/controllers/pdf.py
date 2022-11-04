"""Handels download of PDFs."""

import math
from email.utils import parsedate_to_datetime
from pathlib import Path
from datetime import datetime
import time
import logging
from typing import Optional, Callable
import requests

from flask import Response, redirect, current_app, abort

from browse.domain.identifier import Identifier, IdentifierException
from browse.services.document.cache import cache_file_path_for_id
from browse.services.document.metadata import AbsNotFoundException, AbsVersionNotFoundException, get_abs

log = logging.getLogger(__file__)
log.setLevel(logging.DEBUG)

CONNECT_TIMEOUT = 0.1 #seconds
READ_TIMEOUT = 0.1 #seconds

# Only in python>=3.8
#DL_TYPE = Literal['pdf','ps','dvi','html']
DL_TYPE = str

#PDF_ACTION = Literal['SERVE_CDN', 'SERVE_ARXIV', 'RECOMPILE_SRC', 'NO_SRC']
PDF_ACTION = str


def what_to_do(
        file_mtime: Optional[float],
        src_file_mtime: Optional[float],
        cdn_url: str,
        cdn_mtime_fn: Callable[[str],Optional[float]],
        favor_cdn: bool =True) -> PDF_ACTION:
    """Gets action to do for state of affares for article.

    Parameters
    ----------
    file_mtime : Optional[datetime]
        mtime for article file. Must include tz. Pass `None` to
        indicate file does not exist.
    src_file_mtime : Optional[datetime]
        mtme for source file for article. Must include tz. Pass `None`
        to indicate file does not exist.
    cdn_url : str
        URL for article in CDN
    cdn_mtime_fn : Callable[[str],datetime]
        Function to get mtime from CDN. Returns `None` to indicate the
        file is not available in the CDN.
    favor_cdn: bool
        If True, try to serve from the CDN

    Returns
    -------
    PDF_ACTION
        Action that should be taken for the request for this article.
    """
    no_pdf = file_mtime is None and src_file_mtime is not None
    pdf_stale = src_file_mtime is not None and file_mtime is not None\
        and src_file_mtime > file_mtime

    if no_pdf or pdf_stale:
        if favor_cdn and cdn_mtime_fn(cdn_url) is not None:
            return 'SERVE_CDN'
        else:
            return 'RECOMPILE_SRC'

    if file_mtime is None and src_file_mtime is None:
        if cdn_mtime_fn(cdn_url) is not None:
            return 'SERVE_CDN'
        else:
            return 'NO_SRC'

    if cdn_url is None or not cdn_url or not cdn_mtime_fn:
        return 'SERVE_ARXIV'
    
    cdn_mtime = cdn_mtime_fn(cdn_url)
    if cdn_mtime is None or file_mtime > cdn_mtime: # type: ignore
        return 'SERVE_ARXIV'
    else:
        return 'SERVE_CDN'


def get_cdn_mtime(url: str) -> Optional[float]:
    """Gets the last-modified time from the CDN.

    Parameters
    ----------
    url : str
        Full url to dissemination in CDN.

    Returns
    -------
    Optional[datetime]
        last-modified of object in CDN. Must have a tz. None if the
        GET request did not have a 200.
    """
    resp = requests.head(url, timeout=(CONNECT_TIMEOUT, READ_TIMEOUT))
    if not resp or resp.status_code != 200:
        return None
    else:
        last_mod = resp.headers.get('last-modified', '0')
        return parsedate_to_datetime(last_mod).timestamp()


def cdn_url(dltype: DL_TYPE, id: Identifier) -> str:
    """Makes a URL for a article in the CDN."""
    host = current_app.config.get('CDN_HOST')
    if not id.has_version:
        raise RuntimeError("id must have a version")

    return f"https://{host}/{dltype}/{id.archive}/{id.filename}v{id.version}.pdf"


def _is_cdn_enabled() -> bool:
    return bool(current_app.config.get('CDN_ENABLED'))


def _pdf_main_url() -> str:
    return current_app.config.get('DOWNLOAD_FALLBACK_URL') # type: ignore

def _mtime_for_id(format: str, id:Identifier) -> Optional[float]:
    path = Path(cache_file_path_for_id(id, format))
    if path.exists():
        return path.stat().st_mtime
    else:
        return None

def _src_mtime_for_id(id: Identifier) -> Optional[float]:
    # TODO implement
    return None

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
    id = None
    try:
        id = Identifier(arxiv_id)
    except IdentifierException:
        abort(404)
        
    if id == None:
        abort(404)

    # TODO Handle HEAD
    # Probably about the same thing? Maybe we can save the head used
    # to check the CDN and send that?

    #import pdb; pdb.set_trace();
    
    format = 'pdf'
    
    try:
        if not id.has_version:
            metadata = get_abs(arxiv_id)
            id.has_version = True
            id.version = metadata.highest_version()
        else:
            metadata = get_abs(arxiv_id)
            
        if _is_cdn_enabled():
            arxiv_mtime = _mtime_for_id(format, id)
            arxiv_src_mtime = _src_mtime_for_id(id)
            url = cdn_url(format, id)
            action = what_to_do(arxiv_mtime, arxiv_src_mtime, url, get_cdn_mtime)
            if action == 'SERVE_CDN':
                log.debug('CDN is fresh for url %s', url)
                return redirect(url, code=302)
            else:
                log.debug('CDN was not fresh for url %s', url)

    except (AbsNotFoundException, AbsVersionNotFoundException):
        abort(404)
    except Exception as ex:
        log.warning("Problem while chekcing CDN for %s: %s", arxiv_id, ex)

    return _reverse_proxy(f"{_pdf_main_url()}/{arxiv_id}")
