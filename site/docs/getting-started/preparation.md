---
id: preparation
title: Preparation
sidebar_label: Preparation
---

## Installing Fusuma

Fusuma requires Node >= 12.x.

```sh
$ npm i fusuma -D # yarn add fusuma --dev
```

## Directory Structure

The default directory name is `slides` and Fusuma provides `init` command so it's better to use it.

```sh
$ mkdir slides && echo '# Hello😄' > slides/title.md
$ tree -a
.
└── slides
    └── title.md

1 directory, 1 files

# or use init command

$ npx fusuma init
$ tree -a
.
├── .fusumarc.yml
├── .github
│   └── workflows
│       └── fusuma.yml
├── slides
│   └── 0-title.md
└── style.css

1 directory, 3 files
```

### Slide Loading Order

```sh
.
├── .fusumarc.yml       <-- [optional] the configuration file
├── index.js            <-- [optional] js extending fusuma
├── slides              <-- [required] slides written by Markdown or HTML
│   ├── 0-title.md
│   ├── 01-content.md
│   ├── 02-body
│   │   └── 0-title.md
│   └── 03-end.md
└── style.css           <-- [optional] css extending fusuma
```

> A file extension doesn't matter either `.md` or `.mdx`.

Searching slides are based on root hierarchy, and searching order is **numeric, alphabetical**.

The slide display order is as follows.

```sh
0-title.md -> 01-content.md -> 0-title.md(in 02-body) -> 03-end.md
```

## package.json

It is good to define in pacakge.json as follows.

```json
{
  "start": "fusuma start",
  "start:prod": "fusuma start-prod",
  "build": "fusuma build",
  "deploy": "npm run build && fusuma deploy",
  "pdf": "npm run build && fusuma pdf"
}
```
