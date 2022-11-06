#!/bin/bash
source .env

docker push $DOCKER_HUB_USER/$REPO_NAME

"$@"