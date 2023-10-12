#!/bin/bash
ROOT_DIR=/opt_arxiv/e-prints/ntai/arxiv-browse/script/sync_prod_to_gcp
LOG_DIR=/opt_arxiv/e-prints/logs/gen-pdf
NODE=$1
if [ -z "$NODE" ]; then
    echo "Please provide web node like web5"
    exit 1
fi
mkdir $LOG_DIR
source $ROOT_DIR/bin/acvivate
python3 $ROOT_DIR/generate_pdf_service.py --json-log-dir $LOG_DIR --host $NODE.arxiv.org > /dev/null 2>&1
