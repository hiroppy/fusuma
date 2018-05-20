<div align="center">
  <h1>Fusuma</h1>
</div>

<div align="center">
  <strong>📝 easily make slides with markdown</strong>
</div>

[![npm](https://img.shields.io/npm/v/fusuma.svg?style=flat-square)](https://www.npmjs.com/package/fusuma)
[![Travis](https://img.shields.io/travis/hiroppy/fusuma.svg?style=flat-square)](https://travis-ci.org/hiroppy/fusuma)
[![AppVeyor](https://img.shields.io/appveyor/ci/hiroppy/fusuma.svg?style=flat-square)](https://ci.appveyor.com/project/hiroppy/fusuma)
[![Codecov](https://img.shields.io/codecov/c/github/hiroppy/fusuma.svg?style=flat-square)](https://codecov.io/gh/hiroppy/fusuma)

Just write the markdown and make the cool slide.

## Demos

* [introduction slide of Fusuma](https://hiroppy.github.io/fusuma-sample/) [[repository](https://github.com/hiroppy/fusuma-sample)]
* [animation slide](https://hiroppy.github.io/fusuma-fx-sample/) [[repository](https://github.com/hiroppy/fusuma-fx-sample)]
* [the present and future of JavaScript](https://slides.hiroppy.me/the-present-and-future-of-JavaScript/) [[repository](https://github.com/hiroppy/slides/tree/master/slides/the-present-and-future-of-JavaScript)]
* other my slide [[repository](https://github.com/hiroppy/slides#my-slides)]

## Install

Node versions > v8

```sh
$ npm i fusuma --save-dev # or npm i fusuma -g

# if you want to use yarn
$ yarn add fusuma --dev
```

## Procedure

Just execute the following three lines for executing, generating and deploying slides!

```sh
$ npm i fusuma -D
$ npx fusuma init
$ mkdir slides && echo '# Hello😄' > slides/title.md

# --- Tree ---
$ tree -a
.
├── .fusumarc.yml
└── slides
    └── title.md

1 directory, 2 files

# --- executable tasks---
$ npx fusuma start                     # development
$ NODE_ENV=production npx fusuma build # production
$ npx fusuma deploy                    # deploy to github pages
$ npx fusuma pdf                       # export as PDF from HTML
```

When `npx fusuma start` is executed, it is output as follows.

![](./images/procedure-screenshot.png)

## Feature

* support [bespoke.js](https://github.com/bespokejs/bespoke)
* support animations of page transition
* support SNS, fullscreen, Presenter Mode
* support development mode, production build and deploy
* overwriting of js and css is possible
* export as PDF

## Directory Structure

Please see [samples](/samples) or Demo repository.

Slide order is numeric, alphabetical.

```
.
├── .fusumarc.yml       <-- a configuration file
├── index.js            <-- optional for rewriting
├── slides              <-- slides written by Markdown or HTML
│   ├── 0-title.md
│   ├── 01-content.md
│   ├── 02-body
│   │   └── 0-title.md
│   └── 03-end.md
└── style.css           <-- optional for rewriting

2 directories, 7 files
```

## Usage

```sh
   fusuma 0.2.1 - CLI for easily make slides with markdown

   USAGE

     fusuma <command> [options]

   COMMANDS

     init                Create a configure file
     start               Start with webpack-dev-server
     build               Build with webpack
     deploy              Deploy to GitHub pages
     pdf                 Export as PDF
     help <command>      Display help for a specific command

   GLOBAL OPTIONS

     -h, --help         Display help
     -V, --version      Display version
     --no-color         Disable colors
     --quiet            Quiet mode - only displays warn and error messages
     -v, --verbose      Verbose mode - will also output debug messages
```

## Configuration File

Support for `yaml` and `js`.

### .fusumarc.yml

<details>

```yaml
meta:
  url: https://slides.hiroppy.me
  name: the present and future of JavaScript
  author: Yuta Hiroto
  description: Explain how specifications are determined and how it will be in the future.
  thumbnail: https://avatars1.githubusercontent.com/u/1725583?v=4&s=200
  siteName: slides.hiroppy.me
  sns:
    - twitter
    - hatena
slide:
  theme: nebula
  sidebar: true
extends:
  js: index.js
  css: style.css
```

</details>

### .fusumarc.js

<details>

```js
module.exports = {
  meta: {
    url: 'https://slide.hiroppy.me',
    name: 'test-test',
    author: 'hiroppy',
    description: 'test',
    thumbnail: 'url',
    siteName: 'siteName',
    sns: ['twitter', 'hatena']
  },
  slide: {
    theme: 'nebula',
    sidebar: true
  },
  extends: {
    js: 'index.js',
    css: 'style.css'
  }
};
```

</details>

### Themes

* Cube
* Voltaire
* Nebula (default)

https://github.com/bespokejs/bespoke#themes

Or you can specify a theme.

## Slide Syntax

See [docs/slide.md](./docs/slide.md).

## Presenter Mode

Click the rocket(:rocket:) icon from the bottom right menu(三) and then slides for presentation will be opened as a new window, and an already open window will be windows for presenters.

Host: `?presenter=host`  
View: `?presenter=view`

![](./images/presenter-host.png)

## Library

* Bespoke
* Babel
* webpack
* Postcss
* Prism
* React
* Workbox
* font-awesome

## API

```js
const { start, build, deploy, pdf } = require('fusuma');
```

## Articles

* [Markdown だけで綺麗なスライドを作る CLI を作っている](http://blog.hiroppy.me/entry/fusuma)
* [Introduce Fusuma that is a helper for creating a slide](https://medium.com/@about_hiroppy/introduce-fusuma-that-is-a-helper-for-creating-a-slide-10d54775f255)
