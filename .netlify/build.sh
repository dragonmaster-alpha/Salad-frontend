#!/usr/bin/env bash
set -eufo pipefail

########## Script ##########

before_exit() {
  # Reset current directory.
  echo 'pushd -0'
  pushd -0
  echo 'dirs -c'
  dirs -c
}
trap before_exit EXIT

echo "yarn run lint"
yarn run lint

echo "yarn run build"
yarn run build
