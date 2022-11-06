#!/bin/bash

docker run -p80:3000 ci-cd-nestjs

"$@"
