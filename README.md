# dexto-factory-test

[![CI](https://github.com/dexto-slacktest1021/dexto-factory-test/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/dexto-slacktest1021/dexto-factory-test/actions/workflows/ci.yml)

## Usage

This repository is documentation only. There is no package to install and no program to run.

```bash
git clone https://github.com/dexto-slacktest1021/dexto-factory-test.git
cd dexto-factory-test
```

## Dogfood

`dogfood/slugify.py` provides `slugify(text)`. It lowercases the text, keeps only ASCII letters and digits, and joins the words with hyphens.

```bash
python -m pytest dogfood/test_slugify.py
```
