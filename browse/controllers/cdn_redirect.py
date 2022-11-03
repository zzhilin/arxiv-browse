"""Handles redirects to CDN."""
import re
from email.utils import parsedate_to_datetime

#from typing import Literal

from flask import current_app, request, Response
import requests

from arxiv import identifier

from browse.domain.identifier import Identifier

import logging
log = logging.getLogger(__file__)
log.setLevel(logging.DEBUG)

CONNECT_TIMEOUT = 0.1 #seconds
READ_TIMEOUT = 0.1 #seconds

# Only in python>=3.8
#DL_TYPE = Literal['pdf','ps','dvi','html']
DL_TYPE = str

def is_cdn_fresh(cdn_url: str, arxiv_mtime:int) -> bool:
    """Checks if CDN content has >= arxiv_mtime."""
    resp = requests.head(cdn_url, timeout=(CONNECT_TIMEOUT, READ_TIMEOUT))
    if not resp or resp.status_code != 200:
        return False
    last_mod = resp.headers.get('last-modified', '0')
    cdn_mtime = parsedate_to_datetime(last_mod)
    log.debug("cdn_mtime %d arxiv_mtype %d", cdn_mtime.timestamp(), arxiv_mtime)
    return bool( cdn_mtime and cdn_mtime.timestamp() >= arxiv_mtime)


def cdn_url(dltype: DL_TYPE, id: Identifier) -> str:
    """Makes a URL for a article in the CDN."""
    host = current_app.config.get('CDN_HOST')
    if not id.has_version:
        raise RuntimeError("id must have a version")

    return f"https://{host}/{dltype}/{id.archive}/{id.filename}v{id.version}.pdf"
