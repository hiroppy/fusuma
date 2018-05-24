# Slide Syntax

All slides are written in HTML or markdown.

## Contents

Get the content of the slide and display it as a list in the sidebar.

e.g. https://hiroppy.github.io/fusuma-sample/#3

### Markdown

```md
<!-- contents -->

## Contents
```

## Section Title

This is the common setting of the slide for the title of the section.

### Markdown

```md
<!-- sectionTitle -->

## title
```

### CSS

```css
@import 'fusuma/src/frontend/assets/style/variable';

.bespoke-backdrop.section-title {
  background: red;
}

.section-title h2 {
  color: var(--color-js);
}
```

## Background

Change the slide's background.

### Markdown

```md
<!-- background: xxx -->

## title
```

### CSS

```css
.bespoke-backdrop.xxx {
  background: red;
}
```

## Animation

Set animation of page transition.
use [bespoke-fx](https://github.com/hiroppy/bespoke-fx).

The slides described is [here](https://hiroppy.github.io/fusuma-fx-sample/).

### Direction

The properties of `direction` are `vertical` and `horizontal`(default).

#### Markdown

```md
<!-- direction: vertical -->

## title
```

### Transition

See [bespoke-fx#transitions](https://github.com/ebow/bespoke-fx#transitions).

#### Markdown

```md
<!-- transition: room -->

## title
```

## Presenter Note

A note to display when Presenter Mode.

### Markdown

```md
## title

<!-- note
This is the presenter note.
This sentence can be seen when using Presenter Mode.
-->
```

![](../images/presenter-host.png)
