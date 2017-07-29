#!/bin/bash

set -e

if [[ "$TRAVIS_SECURE_ENV_VARS" == "false" ]]; then
  echo "skip npm publish upload, TRAVIS_SECURE_ENV_VARS=$TRAVIS_SECURE_ENV_VARS"
  exit 0
fi

# Only publish new version to NPM for release tags vM.N.P
if [[ $TRAVIS_TAG =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "publishing to NPM, TAG=$TRAVIS_TAG"
else
  echo 'skip npm publish upload, only allowed for tagged releases'
  exit 0
fi

npm publish