---
id: cli
title: CLI
sidebar_label: CLI
---

Fusuma provides these commands.

```sh
$ npx fusuma --help
```

## Init

Create a configuration file.

```sh
$ npx fusuma init
$ npx fusuma init --help
```

## Start

Serve your slides with webpack-dev-server.

```sh
$ npx fusuma start
$ npx fusuma start --help
```

## Build

Generate static files using webpack as NODE_ENV=production.

```sh
$ npx fusuma build
$ npx fusuma build --help
```

## Live

Run the server and start Live Mode.

See [Live Mode](modes-live.md) for detail.

```sh
$ npx fusuma live
$ npx fusuma live --help
```

## Deploy

Deploy your slides to GitHub Pages.

```sh
$ npx fusuma deploy
$ npx fusuma deploy --help
```

## PDF

Export your slides as PDF.

```sh
$ npx fusuma pdf
$ npx fusuma pdf --help
```

## Package.json

It is good to define in pacakge.json as follows.

```json
{
  "start": "fusuma start",
  "build": "fusuma build",
  "pdf": "fusuma pdf",
  "live": "fusuma live -w '@nodejs'",
  "deploy": "fusuma deploy"
}
```
