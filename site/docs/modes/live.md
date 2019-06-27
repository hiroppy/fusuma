---
id: live
title: Live Mode
sidebar_label: Live Mode
---

Fusuma can fetch tweets from Twitter. In addition, fusuma have an api endpoint. If you specify a `keyword` and `authentication keys`, fetching from twitter will be enabled. Since comments can be sent to fusuma itself, you can use in the private case. Also, this mode can run with Presenter Mode.

## Starting Up

> The easiest way is to start Fusuma on localhost, but of course, you can deploy Fusuma to a service such as Heroku.

1. If you want to fetch tweets from Twitter, Fusuma requires `.env` file.

```sh
$ npx fusuma init -s live
```

```sh
# .env
CONSUMER_KEY=
CONSUMER_SECRET=
ACCESS_TOKEN_KEY=
ACCESS_TOKEN_SECRET=
```

This key can be generated from [Twitter Developer](https://developer.twitter.com/) site. Fusuma runs Express server on the host side and fetches Tweets via API.

2. You specify a keyword like `@nodejs`, `#javascript`, etc. if you want to fetch tweets.

```sh
$ npx fusuma live -w '@nodejs'
$ open http://localhost:3000
```

## Features

### Streaming Comments

It is possible to stream comments when giving a speech. Fusuma accepts Tweets from Twitter and Fusuma comments.

![](assets/live-mode-comments.png)

#### API Endpoint

`POST: /api/comments`

```sh
$ curl -X POST -H "Content-Type: application/json" -d '{"text":"hello:)"}' localhost:3000/api/comments
```
