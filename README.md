<div align="center">
  <h1>Fusuma</h1>
</div>

<div align="center">
  <strong>📝 easily make slides with markdown</strong>
</div>

[![npm](https://img.shields.io/npm/v/fusuma.svg?style=flat-square)](https://www.npmjs.com/package/fusuma)
[![Travis](https://img.shields.io/travis/hiroppy/fusuma.svg?style=flat-square)](https://travis-ci.org/hiroppy/fusuma)

Just write down the markdown and make the cool slide.

_Moved core codes from [hiroppy/slides](https://github.com/hiroppy/slides)._

## Demo
Generated slide is [the present and future of JavaScript](https://slides.hiroppy.me/the-present-and-future-of-JavaScript/).

Repository sample is [hiroppy/fusuma-sample](https://github.com/hiroppy/fusuma-sample).

## Directory Structure

Please see [samples](/samples) or Demo repository.

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

## Feature
- support [bespoke.js](https://github.com/bespokejs/bespoke)
- support SNS, fullscreen, Presenter Mode
- support development mode, production build and deploy
- overwriting of js and css is possible

## Install
node versions > v8

```sh
$ npm i fusuma --save-dev # or npm i fusuma -g

# if you want to use yarn
$ yarn add fusuma --dev
```

## Usage

```sh
   fusuma 0.0.7 - CLI for easily make slides with markdown
   USAGE
     fusuma <command> [options]
   COMMANDS
     start               Start with webpack-dev-server
     build               Build with webpack
     init                Create a configure file
     deploy              Deploy to GitHub pages
     help <command>      Display help for a specific command

   GLOBAL OPTIONS

     -h, --help         Display help
     -V, --version      Display version
     --no-color         Disable colors
     --quiet            Quiet mode - only displays warn and error messages
     -v, --verbose      Verbose mode - will also output debug messages
```

## rc

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
slide:
  theme: js
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
    siteName: 'siteName'
  },
  slide: {
    theme: 'js'
  },
  extends: {
    js: 'index.js',
    css: 'style.css'
  }
};
```

</details>

### Theme

Provide themes.

## Slide Syntax
See [docs/slide.md](./docs/slide.md).

## Presenter Mode

Click the rocket(:rocket:) icon from the bottom right menu(三) and then slides for presentation will be opened as a new window, and an already open window will be windows for presenters.

Host: `?presenter=host`  
View: `?presenter=view`

![](./images/presenter-host.png)

## Library
- Bespoke
- Babel
- webpack
- Postcss
- Prism
- React
- Workbox
- font-awesome