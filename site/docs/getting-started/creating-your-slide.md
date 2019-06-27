---
id: creating-your-slide
title: Creating Your Slide
sidebar_label: Creating Your Slide
---

Fusuma allow using `.md` and `.mdx` extensions and provides 2 methods for dividing your slide.

## Markdown

```md
<!-- 0-title.md -->

## Hello

This is the first slide.
```

## MDX

## What's mdx?

_MDX is an authorable format that lets you seamlessly use JSX in your markdown documents. You can import components, like interactive charts or notifications, and export metadata. This makes writing long-form content with components a blast_.

[mdx-js/mdx](https://github.com/mdx-js/mdx)

**In other words, you can use react components into Markdown.**

```md
<!-- 0-title.mdx -->

import { Sample } from './scripts/Sample';

<Sample />
```

```js
// Sample.js

import React from 'react';

export const Sample = () => <p>Hello from jsx!!</p>;
```

## Dividing Slides

The order of the slides is determined by the file name, but also you can split using `---` in the file.

```md
<!-- 0-title.md -->

## Hello

This is the first slide.

---

## 🤭

This is the second slide.
```

See the example directory for use-case. [fusuma/intro](https://github.com/hiroppy/fusuma/tree/master/samples/intro/slides)
