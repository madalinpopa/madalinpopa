"""
Development settings.
"""
from .base import *

# GENERAL
# -----------------------------------------------------------------------------
DOMAIN = "http://localhost:8000/"

DEBUG = True

# TEMPLATES
# -----------------------------------------------------------------------------
TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "mihaelamocanu/templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
            "debug": True,
        },
    },
]

# For tests to speed up
# -----------------------------------------------------------------------------
PASSWORD_HASHERS = [
    "django.contrib.auth.hashers.MD5PasswordHasher",
]
