"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { titlecase } = require("./titlecase");

test("returns an empty string for an empty string", () => {
  assert.equal(titlecase(""), "");
});

test("capitalises a single word", () => {
  assert.equal(titlecase("hello"), "Hello");
});

test("normalises mixed case", () => {
  assert.equal(titlecase("hELLo wORLD"), "Hello World");
});

test("trims and collapses extra spaces", () => {
  assert.equal(titlecase("  hello   WORLD  "), "Hello World");
});
