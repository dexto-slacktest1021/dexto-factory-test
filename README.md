# dexto-factory-test

[![CI](https://github.com/dexto-slacktest1021/dexto-factory-test/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/dexto-slacktest1021/dexto-factory-test/actions/workflows/ci.yml)

## Usage

This repository is documentation only. There is no package to install and no program to run.

```bash
git clone https://github.com/dexto-slacktest1021/dexto-factory-test.git
cd dexto-factory-test
```

### truncate

`truncate(text, max)` returns `text` when it is at most `max` characters long. Otherwise it returns the first `max - 1` characters followed by `…`, so the result is exactly `max` characters. `max` must be a positive integer.

```js
const { truncate } = require("./src/truncate");

truncate("hello", 10); // "hello"
truncate("hello", 5); // "hello"
truncate("hello world", 8); // "hello w…"
```
