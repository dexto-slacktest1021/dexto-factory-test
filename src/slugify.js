"use strict";

/**
 * Turn text into a URL-safe slug.
 * Lowercases, trims, turns spaces and underscores into hyphens,
 * drops anything that is not a letter, number, or hyphen, and
 * collapses repeated hyphens.
 * @param {string} text
 * @returns {string}
 */
function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]+/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

module.exports = { slugify };
