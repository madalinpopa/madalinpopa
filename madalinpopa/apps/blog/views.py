"""
Blog App Views
"""
from django.http.request import HttpRequest
from django.http.response import HttpResponse
from django.template.response import TemplateResponse
from django.views.decorators.http import require_http_methods


@require_http_methods(["GET"])
def home_view(request: HttpRequest) -> HttpRequest:
    """Blog home page view"""
    template = "blog/home.html"
    return TemplateResponse(request=request, template=template)
