<!-- sectionTitle: usage -->

## Usage

---

## Command

```txt
USAGE

  fusuma <command> [options]

COMMANDS

  start               Start with webpack-serve
  build               Build with webpack
  init                Create a configure file
  deploy              Deploy to GitHub pages
  pdf                 Export as PDF
  help <command>      Display help for a specific command
```

---

## Configuration File

Fusuma supports `yaml` and `js`.

```yml
# .fusumarc.yml

meta:
  url:
  name:
  author:
  description:
  thumbnail:
  siteName:
  sns: # twitter, hatena
    - twitter
slide:
  theme:
extends:
  js:
  css:
```

`fusuma init` creates a configuration file.

---

## Directory Structure

```txt
.
├── .fusumarc.yml  <-- required
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

---

## Sample tasks

```js
// package.json

{
  "scripts": {
    "start": "fusuma start",
    "build": "NODE_ENV=production fusuma build",
    "deploy": "npm run build && fusuma deploy"
  },
}
```
