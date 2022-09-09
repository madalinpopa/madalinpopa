"""
Tests for blog views
"""
from django.urls import reverse
from pytest_django.asserts import assertTemplateUsed


def test_used_template_blog_page(client):
    """
    Test the template used.
    Expected: blog/home.html
    """
    expected_template = "blog/home.html"
    response = client.get(reverse("blog:home"))
    assertTemplateUsed(response, expected_template)
