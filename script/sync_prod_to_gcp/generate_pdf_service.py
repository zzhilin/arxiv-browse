"""
"""
import os.path

import sys
import argparse
import re
import threading
from threading import Thread
from queue import Queue, Empty
import requests
from time import sleep, perf_counter, gmtime, strftime as time_strftime

from datetime import datetime
import signal
import json
from typing import List, Tuple

from pathlib import Path

from identifier import Identifier
from digester import get_file_mtime

overall_start = perf_counter()

from google.cloud import storage

import logging.handlers
import logging_json
import logging

logging.basicConfig(level=logging.WARNING, format='%(message)s (%(threadName)s)')
logger = logging.getLogger(__file__)
logger.setLevel(logging.INFO)
from concurrent.futures import TimeoutError
from google.cloud import pubsub_v1

ENSURE_UA = 'periodic-rebuild'
ENSURE_CERT_VERIFY = False

def main(gcp_project, sub_id)
    timeout = 10.0

    subscriber = pubsub_v1.SubscriberClient()
    # The `subscription_path` method creates a fully qualified identifier
    # in the form `projects/{project_id}/subscriptions/{subscription_id}`
    subscription_path = subscriber.subscription_path(gcp_project, sub_id)
    streaming_pull_future = subscriber.subscribe(subscription_path, callback=callback)

    http_session = requests.Session()
    headers = {'User-Agent': ENSURE_UA}

    def callback(message: pubsub_v1.subscriber.message.Message) -> None:
        json_str = message.data.decode('upt-8')
        try:
            data = json.loads(json_str)
            from_url = data.get('from')
            to_url = data.get('to')
            service = data.get('service')
            meta = data.get('meta')

            if os.path.exists(to_url):
                message.ack()
                return

        except:
            message.nack()
            pass

        try:
            resp = http_session.get(url, headers=headers, stream=True, verify=ENSURE_CERT_VERIFY)
        except:
            message.nack()
            pass

        pass

    # Wrap subscriber in a 'with' block to automatically call close() when done.
    with subscriber:
        try:
            # When `timeout` is not set, result() will block indefinitely,
            # unless an exception is encountered first.
            streaming_pull_future.result(timeout=timeout)
        except TimeoutError:
            streaming_pull_future.cancel()  # Trigger the shutdown.
            streaming_pull_future.result()  # Block until the shutdown is complete.
            pass
        pass
    pass

