# dexto-factory-test

[![CI](https://github.com/dexto-slacktest1021/dexto-factory-test/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/dexto-slacktest1021/dexto-factory-test/actions/workflows/ci.yml)

## Usage

This repository is documentation only. There is no package to install and no program to run.

```bash
git clone https://github.com/dexto-slacktest1021/dexto-factory-test.git
cd dexto-factory-test
```

## titlecase

`titlecase(text)` capitalises the first letter of each word and lowercases the rest. Leading, trailing, and repeated spaces are trimmed and collapsed.

```js
const { titlecase } = require("./src/titlecase");

titlecase("  hELLo   wORLD  "); // "Hello World"
```
