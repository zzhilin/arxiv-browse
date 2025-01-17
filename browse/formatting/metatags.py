"""Functions to make HTML head metadata tags for DocMetadata."""

import re
from datetime import datetime, timezone
from typing import Dict, List, Union

from arxiv.util.authors import parse_author_affil_utf
from flask import url_for

from browse.domain.metadata import DocMetadata


def meta_tag_metadata(metadata: DocMetadata, truncate: bool = False) -> List:
    """Return data for HTML <meta> tags as used by Google Scholar.

    http://scholar.google.com/intl/en/scholar/inclusion.html.

    Although in earlier messages Anurag suggested a semicolon separated
    author list in one citation_author element, he recommends separate
    elements for each author. Originally we agreed to truncate long
    author lists to the first 100 autohrs but reverted that decision in
    2021-10 to include all authors by default.

    Unlike Classic, this method does not HTML escape anything.

    To use this in tests use like this
    with self.app.test_request_context():
      gs_tags = meta_tag_metadata(m)
    """
    meta_tags = []

    if metadata.title:
        meta_tags.append(_mtag("citation_title", metadata.title))

    if metadata.authors:

        authors_list = (
            parse_author_affil_utf(metadata.authors.raw)[:100]
            if truncate
            else parse_author_affil_utf(metadata.authors.raw)
        )
        meta_tags.extend(filter(lambda a: a, map(format_affil_author, authors_list)))

    found_y = False
    if metadata.journal_ref:
        match = re.search(
            "(journal of artificial intelligence research)",
            metadata.journal_ref,
            re.IGNORECASE,
        )
        if match:
            meta_tags.append(_mtag("citation_journal_title", match.group(1)))
            # check for year of publication
            y_match = re.search(
                r"([^\d]+(\d{4})\s*$|\((\d{4})\))", metadata.journal_ref
            )
            if y_match:
                found_y = True
                if y_match.group(2):
                    meta_tags.append(
                        _mtag("citation_publication_date", y_match.group(2))
                    )
                else:
                    meta_tags.append(
                        _mtag("citation_publication_date", y_match.group(3))
                    )

    if metadata.doi:
        meta_tags.append(_mtag("citation_doi", metadata.doi))

    dtv1 = metadata.get_datetime_of_version(1)
    if not found_y and dtv1:
        meta_tags.append(_mtag("citation_date", dtv1))
    cod = metadata.get_datetime_of_version(metadata.version)
    if cod:
        meta_tags.append(_mtag("citation_online_date", cod))

    pdfurl=url_for("dissemination.pdf", arxiv_id=metadata.arxiv_id, _external=True)
    meta_tags.append(_mtag("citation_pdf_url",pdfurl))

    meta_tags.append(_mtag("citation_arxiv_id", str(metadata.arxiv_id)))
    meta_tags.append(_mtag("citation_abstract", str(metadata.abstract)))
    return meta_tags


def format_affil_author(au: List[str]) -> Dict:
    """Formats author for citation tag."""
    if not au or not au[0]:
        return {}
    name = au[0]
    name = name + " " + au[2] if (len(au) > 2 and au[2]) else name
    name = name + ", " + au[1] if (len(au) > 1 and au[1]) else name
    return _mtag("citation_author", name) if name else {}


def _mtag(name: str, content: Union[int, str, datetime]) -> Dict:
    cstr = ""
    if isinstance(content, datetime):
        cstr = content.astimezone(timezone.utc).strftime("%Y/%m/%d")
    else:
        cstr = f"{content}"

    # Remove any line breaks/multiple spaces
    cstr = re.sub(r"\s\s+", " ", cstr)
    return {"name": name, "content": cstr}
