# Deploying Sandboxes

### Updating the container

To rebuild the docker image, push it to the cloud, and update your vm, simply run:

```bash
./update_container.sh
```

Note that at the first time you also need to run:

```bash
gcloud auth configure-docker
```