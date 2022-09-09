"""madalinpopa URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import typing

from django.contrib import admin
from django.urls import URLPattern, URLResolver, include, path

URL = typing.Union[URLPattern, URLResolver]
UrlList = typing.List[URL]

# Admin site settings
admin.site.site_header = "Madalin Popa"
admin.site.site_title = "Dashboard"
admin.site.index_title = "Dashboard"

DJANGO_APPS: UrlList = [
    path("admin/", admin.site.urls),
]

LOCAL_APPS: UrlList = [
    path("", include("madalinpopa.apps.blog.urls", namespace="blog")),
]

urlpatterns: UrlList = DJANGO_APPS + LOCAL_APPS
