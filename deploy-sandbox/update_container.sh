. internal/config.sh

(cd internal; . build_and_push.sh)

gcloud compute instances update-container $INSTANCE_NAME\
    --zone=$ZONE\
    --container-image=$IMAGE_URL
