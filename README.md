<div align="center">
  <img src="./site/docs/assets/logo.svg">
</div>

<div align="center">
  <strong>A tool to create slides easily for you ✍ ️</strong>
</div>

<br />

[![npm](https://img.shields.io/npm/v/fusuma.svg?style=flat-square)](https://www.npmjs.com/package/fusuma)
[![Azure](https://img.shields.io/azure-devops/build/hiroppy/11c2bed9-94f9-46ea-a0f9-908f1763e0c4/1.svg?style=flat-square)](https://dev.azure.com/hiroppy/fusuma)
[![Codecov](https://img.shields.io/codecov/c/github/hiroppy/fusuma.svg?style=flat-square)](https://codecov.io/gh/hiroppy/fusuma)

## Features

- Zero Config
- Markdown and [MDX](https://github.com/mdx-js/mdx)
- Themes
- Code syntax Highlight, MathJax, Diagrams, and Flowcharts
- Full supporting for SEO and OGP
- Customizable JavaScript and CSS
- A sidebar having agenda and some features

## Modes

- Development Mode
  - Running with HMR
  - Just code Markdown and CSS
- Build Mode
  - Rendering to html and optimize js,css,md
  - Generating an image of slides as `og:image` automatically
- [Presentation Mode](#presenter-mode)
  - Speaker Note
  - Timer
  - Recording your page actions and voice
  - Using a Fluorescent Marker on the slides
- [Live Mode](#live-mode)
  - Streaming tweets and comments
- Deploy Mode
  - Deploying to GitHub Pages
- PDF Mode
  - Exporting slides as PDF
- Live Mode
  - Can make a speech while streaming a comment on Twitter

## Demos

- [Introducing Fusuma](https://hiroppy.github.io/fusuma/intro) [[repository](/samples/intro)]
- [hiroppy/slides](https://github.com/hiroppy/slides)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/hiroppy/fusuma/blob/master/samples/intro/slides/0-title.md)

## Getting Started

[Getting Started/Preparation](https://hiroppy.github.io/fusuma/docs/getting-started/preparation)

Node versions > v12

Just execute the following two lines for executing, generating and deploying slides!

```shell
$ npm i fusuma -D
# not mandatory but it's one easy method
$ npx fusuma init
$ tree -a
.
├── .fusumarc.yml
├── slides
│   └── 0-title.md
└── style.css

$ npx fusuma start # let's start writing slides!

# --- executable tasks---
$ npx fusuma init          # create scaffold
$ npx fusuma start         # run server for development
$ npx fusuma start-prod    # run server for bundle directory
$ npx fusuma build         # build slides for production
$ npx fusuma deploy        # deploy to github pages
$ npx fusuma pdf           # export as PDF
$ npx fusuma live          # start live mode
```

When `npx fusuma start` is executed, fusuma will create a slide as follows and serve `http://localhost:8080` and then you can write slides with HMR.

![](./site/docs/assets/procedure-screenshot.png)

Fusuma adds a Sidebar like below. When you set section titles, fusuma shows them on here.

![](./site/docs/assets/sidebar.png)

When you set the URL of the deployment destination at the production stage, fusuma generate og:image using a first slide automatically.

<img src="./site/docs/assets/og-image.png" width="300"/>

## Themes

Fusuma offers the following themes also users can customize them because this is just CSS.

|                  default                   |                  pop                   |
| :----------------------------------------: | :------------------------------------: |
| ![](./site/docs/assets/themes/default.png) | ![](./site/docs/assets/themes/pop.png) |

|                  webpack                   |                  babel                   |                  node                   |
| :----------------------------------------: | :--------------------------------------: | :-------------------------------------: |
| ![](./site/docs/assets/themes/webpack.png) | ![](./site/docs/assets/themes/babel.png) | ![](./site/docs/assets/themes/node.png) |

[the sample slides for these themes](https://hiroppy.github.io/fusuma/themes/)

## Markdown and MDX

Fusuma uses [remark](https://github.com/remarkjs/remark).

```markdown
## Hello

This is the first slide.

---

## 🤭

This is the second slide.
```

Also, you can use React components!

```markdown
<!-- title.mdx -->

import { Sample } from './scripts/Sample';

<Sample />

---

## 🤭

This is the second slide.
```

```js
// Sample.js
export const Sample = () => <p>Hello from jsx!!</p>;
```

## Presenter Mode

[Modes/Presenter](https://hiroppy.github.io/fusuma/docs/modes/presenter)

This feature uses experimental APIs so please use Chrome or Firefox.

- [Presentation API](https://developer.mozilla.org/en-US/docs/Web/API/Presentation_API) (Chrome, Firefox)
- [Screen Capture API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) (Chrome, Firefox)

You can see your Note for each slide and the next slide on the Host screen.

![](./site/docs/assets/presenter-host.png)

### Features

- Shows your slide note
- Sets a timer
- Records your actions and voice, and do time-travel
- Draws lines on the slide

### Recording Your Actions

![](./site/docs/assets/presenter-mode-timeline.png)

Video -> [Recording Your Voice](https://hiroppy.github.io/fusuma/docs/modes/presenter#recording-your-voice)

### Drawing Lines

When you write characters on the host side, it will be reflected on the client side in real time.

![](./site/docs/assets/drawing.png)

## Live Mode

[Modes/Live](https://hiroppy.github.io/fusuma/docs/modes/live)

Fusuma can fetch tweets from Twitter. In addition, fusuma have an api endpoint.  
If you specify a `keyword` and `authentication keys`, fetching from twitter will be enabled.  
Since comments can be sent to fusuma itself, you can use in the private case.  
Also, this mode can run with Presenter Mode.

![](./site/docs/assets/live-mode-comments.png)

## Special Thanks to

### Themes

I respect your UI and I really love it. I usually talk about you in Japan so I added your colors to Fusuma. If you have issues, feel free to mention me! Thank you.

- Node.js
- webpack
- Babel
