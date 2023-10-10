"""
"""

import argparse
import json
import logging.handlers
import logging
from sync_published_to_gcp import make_todos
from google.cloud import pubsub_v1

logging.basicConfig(level=logging.WARNING, format='%(message)s (%(threadName)s)')
logger = logging.getLogger(__file__)
logger.setLevel(logging.INFO)

def main(args):
    if args.globals:
        globals().update(eval(args.globals))
        pass

    if args.debug:
        logger.setLevel(logging.DEBUG)
        pass

    publisher = pubsub_v1.PublisherClient()
    topic_path = publisher.topic_path(args.project, args.topic)

    for submission in make_todos(args.filename):
        for action, item in submission['actions']:
            if action == 'build+upload':
                future = publisher.publish(topic_path, data=json.dumps({"ids": item}).encode('utf-8'))
                pass
            pass
        pass
    pass


if __name__ == "__main__":
    ad = argparse.ArgumentParser(epilog=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ad.add_argument('--project', help='Additional JSON logging', default='arxiv-production')
    ad.add_argument('--topic', help='GCP pubsub topic', default="cit-pdf-gen")
    ad.add_argument('--debug', help='Set logging to debug', action='store_true')
    ad.add_argument('--globals', help="Global variables")
    ad.add_argument('filename')
    args = ad.parse_args()
    main(args)
