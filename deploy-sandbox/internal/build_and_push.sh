. config.sh

(cd ../../; docker build . -t $IMAGE_FULL_NAME)
docker tag $IMAGE_FULL_NAME $IMAGE_URL
docker push $IMAGE_URL
