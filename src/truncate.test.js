"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { truncate } = require("./truncate");

test("returns a short string unchanged", () => {
  assert.equal(truncate("hi", 5), "hi");
});

test("returns an exact-length string unchanged", () => {
  assert.equal(truncate("hello", 5), "hello");
});

test("cuts a long string to max and ends with an ellipsis", () => {
  const result = truncate("hello world", 8);
  assert.equal(result, "hello w…");
  assert.equal(result.length, 8);
  assert.equal(result.endsWith("…"), true);
});

test("throws TypeError when max is 0", () => {
  assert.throws(() => truncate("hello", 0), TypeError);
});
