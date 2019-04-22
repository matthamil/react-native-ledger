#!/bin/bash

# Uploads coverage report from CircleCI to Codecov
# see https://docs.codecov.io/docs/about-the-codecov-bash-uploader

echo "Uploading coverage report to Codecov..."
bash <(curl -s https://codecov.io/bash)
echo "Success! Uploaded coverage report to Codecov."
