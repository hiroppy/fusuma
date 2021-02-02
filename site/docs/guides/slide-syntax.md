---
id: slide-syntax
title: Slide Syntax
sidebar_label: Slide Syntax
---

Fusuma has some own slide syntax like to create a table of contents automatically, etc. In addition, all syntaxes are written as a comment. You can check [here](https://hiroppy.github.io/fusuma/intro/#slide-5).

## Adding Class Names

Add class names to the root of the slide.

```md
<!-- slide.md -->
<!-- classes: title, main -->

## Hello
```

```css
/* style.css */

.title {
  color: #3498db;
}
.main {
  background: #f5f5f5;
}
```

## Declaring Section Title

Makes explicit declarations to create a table of contents. and it is also added to sidebar's list. In addition, attaches `section-title` class to the slide automatically. This page is the title of each chapter, so you use this class to change CSS.

```md
<!-- slide.md -->
<!-- section-title: This is the first slide! -->

## Hello
```

```css
/* style.css */

.section-title {
  color: #3498db;
  background: #ccc;
}
```

![](assets/slide-syntax-section-title.png)

## Generating Table of Contents

Insert titles written as `section-title` to ToC component automatically.

```md
<!-- toc.md -->

## Contents

<!-- contents -->
```

![](assets/slide-syntax-toc.png)

## Adding Speaker Note

This is a note when you give a speech.

```md
<!-- slide.md -->
<!-- note
This is a speaker note!!
This sentence can be seen when using Presenter Mode.

😍
-->

## Hello!!
```

![](assets/slide-syntax-speaker-note.png)

## Capturing Screen Contents

> You need to check the browser name and version because this feature uses WebRTC.

Your screen can be captured on the slide, but this feature can run only in Presenter Mode. And you can choose your local screen or application window or browser tab as output.

This feature will help **live coding** etc. This feature uses [Screen Capture API
](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) so this syntax can run on Chrome, Edge, and Firefox.

```md
<!-- slide.md -->

## Capturing screen contents

<!-- screen -->
```

![](assets/slide-syntax-screen.png)
