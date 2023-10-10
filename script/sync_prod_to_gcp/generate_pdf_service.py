"""
"""
import argparse
import os.path
from pathlib import Path
import requests
import json
import logging.handlers
# import logging_json
import logging
from google.cloud import storage
from time import gmtime

from identifier import Identifier
from concurrent.futures import TimeoutError
from google.cloud import pubsub_v1
from sync_published_to_gcp import PS_CACHE_PREFIX, ENSURE_CERT_VERIFY, ArxivSyncJsonFormatter, LOG_FORMAT_KWARGS
import signal


logging.basicConfig(level=logging.WARNING, format='%(message)s (%(threadName)s)')
logger = logging.getLogger("genpdf")
logger.setLevel(logging.INFO)



def pdf_cache_path(arxiv_id: Identifier) -> Path:
    """Gets the PDF file in the ps_cache. Returns Path object."""
    archive = ('arxiv' if not arxiv_id.is_old_id else arxiv_id.archive)
    return Path(f"{PS_CACHE_PREFIX}/{archive}/pdf/{arxiv_id.yymm}/{arxiv_id.filename}v{arxiv_id.version}.pdf")


def arxiv_pdf_url(host:str, arxiv_id: Identifier) -> str:
    """Gets the URL that would be used to request the pdf for the arxiv_id"""
    return f"https://{host}/pdf/{arxiv_id.filename}v{arxiv_id.version}.pdf"


def callback(message: pubsub_v1.subscriber.message.Message) -> None:
    global HTTP_SESSION, HEADERS, HOST
    json_str = message.data.decode('utf-8')
    try:
        data = json.loads(json_str)
        ids = data.get('ids')
    except Exception as exc:
        logger.warning(f"bad: {json_str[:1024]}")
        message.nack()
        pass

    arxiv_id = Identifier(ids)
    to_path = pdf_cache_path(arxiv_id)
    if os.path.exists(to_path):
        logger.info(f"{to_path}: the pdf exists.")
        message.ack()
        return

    from_url = arxiv_pdf_url(HOST, arxiv_id)
    try:
        HTTP_SESSION.get(from_url, headers=HEADERS, stream=True, verify=ENSURE_CERT_VERIFY)
    except Exception as exc:
        logger.info(f"{from_url}/{to_path}: back off", exc_info=True)
        pass
    logger.info(f"{from_url}/{to_path}: back off")
    message.nack()
    pass


def main(host, gcp_project, sub_id):
    global HTTP_SESSION, HEADERS, HOST, STORAGE
    HTTP_SESSION = requests.Session()
    HEADERS = {'User-Agent': "sync-pdf-gen-agent"}
    STORAGE = storage.Client()
    HOST = host

    subscriber = pubsub_v1.SubscriberClient()
    subscription_path = subscriber.subscription_path(gcp_project, sub_id)
    streaming_pull_future = subscriber.subscribe(subscription_path, callback=callback)

    def handler_stop_signals(signum, frame):
        streaming_pull_future.cancel()
        pass

    signal.signal(signal.SIGINT, handler_stop_signals)
    signal.signal(signal.SIGTERM, handler_stop_signals)

    with subscriber:
        try:
            streaming_pull_future.result()
        except TimeoutError:
            streaming_pull_future.cancel()  # Trigger the shutdown.
            streaming_pull_future.result()  # Block until the shutdown is complete.
            pass
        pass
    pass


if __name__ == "__main__":
    ad = argparse.ArgumentParser(epilog=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ad.add_argument('host')
    ad.add_argument('--project', help='Additional JSON logging', default='arxiv-production')
    ad.add_argument('--subject', help='GCP pubsub ID', default="pdf-gen-sub")
    ad.add_argument('--json-log-dir', help='Additional JSON logging', default='/var/log/e-prints')
    ad.add_argument('--debug', help='Set logging to debug', action='store_true')
    ad.add_argument('--globals', help="Global variables")
    args = ad.parse_args()

    json_logHandler = logging.handlers.RotatingFileHandler(os.path.join(args.json_log_dir, "pdf-gen.log"),
                                                           maxBytes=4 * 1024 * 1024,
                                                           backupCount=10)
    json_formatter = ArxivSyncJsonFormatter(**LOG_FORMAT_KWARGS)
    json_formatter.converter = gmtime
    json_logHandler.setFormatter(json_formatter)
    json_logHandler.setLevel(logging.DEBUG if args.debug else logging.INFO)
    logger.addHandler(json_logHandler)
    main(args.host, args.project, args.subject)
