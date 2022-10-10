#!/usr/bin/env bash
#
# Set Environments
set -e

if [ ! -f ".env" ]; then

    # Create the .env file
    touch .env

    echo "# General" >> .env
    echo 'ENVIRONMENT="local"' >> .env
    echo 'DOCKERHUB_USERNAME="madalintech"' >> .env

    echo "# Django variables"  >> .env
    echo "SECRET_KEY=\"$(cat /dev/urandom | tr -dc '[:alpha:]' | fold -w ${1:-50} | head -n 1)\"" >>.env
    echo 'DJANGO_SETTINGS_MODULE="madalinpopa.settings.dev"' >> .env
    echo 'DJANGO_DEBUG="True"' >> .env

    echo " " >>.env

    echo "# Database variables"  >> .env
    echo 'DB_NAME="madalinpopa_dev"' >> .env
    echo 'DB_HOST="db"' >> .env
    echo 'DB_PASS="abc123"' >> .env
    echo 'DB_USER="madalin"' >> .env

    echo " " >>.env

    echo "# Azure variables"  >> .env
    echo 'AZURE_ACCOUNT_KEY=' >> .env

    echo " " >> .env

fi

# =========================================
# Install node packages
# =========================================
yarn install

# =========================================
# Build docker images
# =========================================
docker compose build
