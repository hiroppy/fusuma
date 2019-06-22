<!-- sectionTitle: Usage -->

## Usage

---

## CLI

```txt
USAGE

  fusuma <command> [options]

COMMANDS

  init                Create a configure file
  start               Start with webpack-dev-server
  build               Build with webpack
  deploy              Deploy to GitHub pages
  pdf                 Export as PDF
  live                Start live mode
  help <command>      Display help for a specific command
```

---

## Configuration File

Fusuma supports `yaml` and `js`, and `npx fusuma init` creates the configuration file.

```yml
# .fusumarc.yml

meta:
  url:
  title:
  thumbnail:
  description:
  sns:
    - twitter
slide:
  loop: true
  sidebar: true
  targetBlank: true
  showIndex: false
  isVertical: false
extends:
  js:
  css:
```

---

## Directory Structure

```txt
.
├── .fusumarc.yml  <-- optional
├── package.json
├── slides         <-- Required
│   ├── 0-title.md
│   ├── 01-content.md
│   ├── 02-ecma
│   │   ├── 0-ecmascript.md
│   │   ├── 01-tc39.md
│   │   └── 02-history.md
│   └── 03-end.md
├── index.js       <-- optional
└── style.css      <-- optional
```

`slides/` is required.

---

## Tasks

```json
// package.json

{
  "scripts": {
    "start": "fusuma start",
    "build": "fusuma build",
    "deploy": "npm run build && fusuma deploy",
    "pdf": "fusuma pdf"
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
