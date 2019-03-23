# Slide Syntax

All slides are written in HTML or markdown.

## CSS Class Name Aliases

- `__body` -> `.bespoke-parent`
- `__bg` -> `.bespoke-backdrop`
- `__section-title` -> `.bespoke-backdrop.section-title`

## Contents

If you want to automatically make the slide registered to `sectionTitle` a table of contents, add the following.

### Markdown

```md
## Contents

<div>

<!-- contents -->

</div>
```

## Section Title

This is the common setting of the slide for the title of the section.  
This will affect the sidebar's table of contents list and `contents`.

### Markdown

```md
<!-- sectionTitle: title -->

## title
```

### CSS

```css
.bespoke-backdrop.section-title {
  background: red;
}

.section-title h2 {
  color: red;
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
