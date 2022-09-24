#!/usr/bin/env bash
#
# Set Environments
set -e



if [ ! -f "../.env"]; then

    # Create the .env file
    touch .env

    echo "# Django variables"  >>.env
    echo "SECRET_KEY=\"$(cat /dev/urandom | tr -dc '[:alpha:]' | fold -w ${1:-50} | head -n 1)\"" >>.env
    echo 'DJANGO_SETTINGS_MODULE="madalinpopa.settings.dev"' >>.env
    echo 'DJANGO_DEBUG="True"' >>.env
    echo " " >>.env
    echo "# Database variables"  >>.env
    echo 'DEV_DB_NAME="madalinpopa_dev"' >>.env
    echo 'DEV_DB_HOST="db"' >>.env
    echo 'DEV_DB_PASS="abc123"' >>.env
    echo 'DEV_DB_USER="madalin"' >>.env
    echo " " >>.env
    echo "# Azure variables"  >>.env
    echo 'AZURE_ACCOUNT_KEY=' >>.env
    echo 'APP_INSIGHTS_INSTRUMENTATION_KEY=' >>.env
    echo " " >>.env

fi
