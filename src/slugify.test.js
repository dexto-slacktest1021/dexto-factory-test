"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { slugify } = require("./slugify");

test("lowercases and trims", () => {
  assert.equal(slugify("  Hello World  "), "hello-world");
});

test("replaces spaces and underscores with hyphens", () => {
  assert.equal(slugify("foo bar_baz"), "foo-bar-baz");
});

test("drops characters that are not letters, numbers, or hyphens", () => {
  assert.equal(slugify("Hello, World! (2026)"), "hello-world-2026");
});

test("collapses repeated hyphens", () => {
  assert.equal(slugify("a---b  c__d"), "a-b-c-d");
});

test("returns an empty string for punctuation-only input", () => {
  assert.equal(slugify("!!!"), "");
});
