"""Turn text into a lowercase ASCII slug."""

import re
import unicodedata


def slugify(text):
    """Return lowercase ASCII words from text, joined by hyphens.

    Non-ASCII characters are dropped. Letters, digits, and word breaks are
    kept; everything else is treated as a word break.
    """
    normalized = unicodedata.normalize("NFKD", str(text))
    ascii_text = normalized.encode("ascii", "ignore").decode("ascii").lower()
    words = re.findall(r"[a-z0-9]+", ascii_text)
    return "-".join(words)
