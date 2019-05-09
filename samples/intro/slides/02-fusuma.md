<!-- sectionTitle: What is fusuma? -->

## What is Fusuma?

---

## Features

#### _Fusuma is a helper which makes slides using Markdown easily._

<br />

- makes cool slides by [WebSlides](https://github.com/webslides/WebSlides)
- supports development, production and deploy tasks
  - you don't have to write webpack, Babel, Postcss settings, and etc...
- supports OGP, SNS, Fullscreen, and Presenter Mode
- supports [Presentation API](https://developer.mozilla.org/en-US/docs/Web/API/Presentation_API)
- exports as PDF

<br />

### just write in Markdown and execute with CLI😍

---

## Procedure

```shell
$ npm i fusuma -D
$ npx fusuma init
$ mkdir slides && echo '# Hello😄' > slides/title.md # 🎉🎉🎉

# --- executable tasks ---
$ npx fusuma start    # serve as NODE_ENV=development
$ npx fusuma build    # build as NODE_ENV=production
$ npx fusuma deploy   # deploy to github pages
$ npx fusuma pdf      # export as PDF from HTML

$ tree -a
.
├── .fusumarc.yml
└── slides
    └── title.md

1 directory, 2 files
```
