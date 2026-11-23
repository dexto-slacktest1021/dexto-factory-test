"""Tests for dogfood.slugify."""

import pytest

from dogfood.slugify import slugify


@pytest.mark.parametrize(
    ("text", "expected"),
    [
        ("  Hello World  ", "hello-world"),
        ("foo bar_baz", "foo-bar-baz"),
        ("Hello, World! (2026)", "hello-world-2026"),
        ("a---b  c__d", "a-b-c-d"),
        ("!!!", ""),
        ("", ""),
        ("Café naïve", "cafe-naive"),
        ("東京 tokyo", "tokyo"),
        ("Already-a-Slug", "already-a-slug"),
    ],
)
def test_slugify(text, expected):
    assert slugify(text) == expected


def test_slugify_rejects_nothing_and_returns_a_string():
    assert isinstance(slugify(None), str)
