#!/bin/sh
set -e

git pull
nanoc
(
  cd output
  git commit . -m 'automatic compile'
  git push
)
