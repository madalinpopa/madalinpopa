"""
Blog app views mapping
"""
from django.urls import path

from . import views

# Namespace
app_name = "blog"

urlpatterns = [
    path("", view=views.home_view, name="home"),
]
