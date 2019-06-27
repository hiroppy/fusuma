---
id: installation
title: Installation
sidebar_label: Installation
---

## Installing Fusuma

Fusuma requires Node >= 8.x.

```sh
$ npm i fusuma -D # yarn fusuma --dev
```

## Procedure

Only a `slides` directory is required by Fusuma.

```sh
$ mkdir slides && echo '# Hello😄' > slides/title.md
$ npx fusuma start
$ open http://localhost:8080

# --- Tree ---
$ tree -a
.
└── slides
    └── title.md

1 directory, 1 files
```

<br />

As you can see a cool slide was generated.😎 Fusuma uses [WebSlides](http://webslides.tv) as UI and has a sidebar as a default.

![](assets/procedure-screenshot.png)
