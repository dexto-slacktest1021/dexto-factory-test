"use strict";

/**
 * Shorten text to at most max characters.
 * Returns text unchanged when its length is at most max.
 * Otherwise returns the first max - 1 characters followed by "…",
 * so the result is exactly max characters long.
 * @param {string} text
 * @param {number} max
 * @returns {string}
 */
function truncate(text, max) {
  if (!Number.isInteger(max) || max < 1) {
    throw new TypeError("max must be a positive integer");
  }
  if (text.length <= max) {
    return text;
  }
  return text.slice(0, max - 1) + "…";
}

module.exports = { truncate };
