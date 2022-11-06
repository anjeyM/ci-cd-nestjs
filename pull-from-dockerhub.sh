#!/bin/bash
source .env

docker pull $DOCKER_HUB_USER/$REPO_NAME:latest

"$@"