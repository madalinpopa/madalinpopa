"""
Tests for blog views
"""
from django.test import SimpleTestCase
from django.urls import reverse


class TestBlogViews(SimpleTestCase):
    """Tests for blog views"""

    def test_used_template_blog_page(self):
        """Test the template used used by the blog home view"""
        expected = "blog/home.html"
        response = self.client.get(reverse("blog:home"))
        self.assertTemplateUsed(response=response, template_name=expected)
