export SANDBOX_NAME=google-dw
if [[ -z "$SANDBOX_NAME" ]]; then
    echo "Must provide SANDBOX_NAME environment variables in config.sh" 1>&2
    exit 1
fi

export REGION=us-central1
export ZONE=$REGION-b
export IMAGE_FULL_NAME=arxiv/browse:sb-$SANDBOX_NAME
export IMAGE_URL=gcr.io/arxiv-sandbox5/$IMAGE_FULL_NAME
export ADDR_NAME=ip-sb-$SANDBOX_NAME
export INSTANCE_NAME=instance-sb-$SANDBOX_NAME