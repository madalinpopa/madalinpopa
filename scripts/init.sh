#!/usr/bin/env bash
#
# Set Environments
set -e

# =========================================
# Get env vars in the Dockerfile to show up in the SSH session
# =========================================
eval $(printenv | sed -n "s/^\([^=]\+\)=\(.*\)$/export \1=\2/p" | sed 's/"/\\\"/g' | sed '/=/s//="/' | sed 's/$/"/' >> /etc/profile)

# =========================================
# Start SSH Server
# =========================================
service ssh start

# =========================================
# Start gunicorn process
# =========================================
gunicorn --preload --bind=0.0.0.0 --timeout 600 --workers=4 --chdir /opt/madalinpopa madalinpopa.wsgi --access-logfile '-' --error-logfile '-'
