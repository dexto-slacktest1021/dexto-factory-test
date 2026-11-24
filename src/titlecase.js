"use strict";

/**
 * Capitalise the first letter of each word and lowercase the rest.
 * Trims the string and collapses extra spaces between words.
 * @param {string} text
 * @returns {string}
 */
function titlecase(text) {
  return String(text)
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

module.exports = { titlecase };
