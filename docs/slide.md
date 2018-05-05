# Slide Syntax

All slides are written in HTML or markdown.

## Contents

Get the content of the slide and display it as a list in the sidebar.

e.g. https://hiroppy.github.io/fusuma-sample/#3

### md

```md
<!-- contents -->

## Contents
```

## Background

Change the slide's background.

### md

```md
<!-- background: xxx -->

## title
```

### css

```css
.bespoke-backdrop.xxx {
  background: red;
}
```

## Section Title

This is the common setting of the slide for the title of the section.

### md

```md
<!-- sectionTitle -->

## title
```

### css

```css
@import 'fusuma/src/frontend/assets/style/variable';

.bespoke-backdrop.section-title {
  background: red;
}

.section-title h2 {
  color: var(--color-js);
}
```

## Presenter Note

A note to display when Presenter Mode.

### md

```md
## title

<!-- note
This is the presenter note.
This sentence can be seen when using Presenter Mode.
-->
```

![](../images/presenter-host.png)
