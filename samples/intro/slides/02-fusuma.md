<!-- section-title: What is fusuma? -->

## What is Fusuma?

---

## Features

#### _Fusuma is a helper which makes slides using Markdown easily._

<br />

- supports development, production and deploy tasks
  - you don't have to write webpack, Babel, Postcss settings, and etc...
- supports OGP, SNS, FullScreen, and Presenter Mode
- supports [Presentation API](https://developer.mozilla.org/en-US/docs/Web/API/Presentation_API)
- supports custom themes
- exports as PDF

<br />

### just write in Markdown and execute with CLI😍

---

## Procedure

```shell
$ npm i fusuma -D
$ npx fusuma init # generate some files
$ tree -a
.
├── .fusumarc.yml
├── slides
│   └── 0-title.md
└── style.css

# --- executable tasks---
$ npx fusuma init          # create scaffold
$ npx fusuma start         # run server for development
$ npx fusuma start-prod    # run server for bundle directory
$ npx fusuma build         # build slides for production
$ npx fusuma deploy        # deploy to github pages
$ npx fusuma pdf           # export as PDF
$ npx fusuma live          # start live mode
```

---

## Tasks

```json
// package.json

{
  "scripts": {
    "start": "fusuma start",
    "start:prod": "npm run build && fusuma start-prod",
    "build": "fusuma build",
    "deploy": "npm run build && fusuma deploy",
    "pdf": "npm run build && fusuma pdf"
  }
}
```

---

## Syntax Highlighting

Fusuma uses [prismjs](https://prismjs.com/).

Please set languages to `.fusumarc.yml` or `.fusumarc.js` if you want to use these.

<br />

```yml
# .fusumarc.yml

slide:
  code:
    languages:
      - javascript
    plugins:
      - line-numbers
    theme: twilight
```
