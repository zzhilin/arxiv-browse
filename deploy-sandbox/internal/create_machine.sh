. config.sh

(. build_and_push.sh)

gcloud compute addresses create $ADDR_NAME --region=us-central1

gcloud compute instances create-with-container $INSTANCE_NAME\
    --project=arxiv-sandbox5\
    --zone=$ZONE\
    --machine-type=e2-medium\
    --address=$ADDR_NAME\
    --container-restart-policy=never\
    --tags=http-server\
    --metadata-from-file=startup-script=machine_startup.sh\
    --container-image=$IMAGE_URL\
    --scopes=default,sql-admin\
    --container-mount-host-path=host-path=/mnt/disks/orig_data,mount-path=/data/orig,mode=ro\
    --container-mount-host-path=host-path=/mnt/disks/ftp_data,mount-path=/data/ftp,mode=ro\
    --container-mount-host-path=host-path=/mnt/disks/ps_cache2,mount-path=/cache/ps_cache2,mode=ro\
    --container-env=BROWSE_SQLALCHEMY_DATABASE_URI=$(gcloud secrets versions access 1 --secret="sb-mysql-path")\
    --container-env-file=env_values.txt
