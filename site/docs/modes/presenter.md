---
id: presenter
title: Presenter Mode
sidebar_label: Presenter Mode
---

Fusuma provides Presenter Mode for giving a speech which is similar to Keynote and PowerPoint.

> This mode has many experimental features of browsers, so you should use either Chrome or Firefox or Edge.

![](assets/presenter-host.png)

## Starting Up

1. Open Sidebar(click the bottom right button(三))
2. Click the PC monitor icon
3. The startup method differs depending on whether [Presentation API](https://developer.mozilla.org/en-US/docs/Web/API/Presentation_API) is supported.

> [Chrome] You can use Presentation API, so select the equipment to cast.

> [Other Browsers] Fusuma fallbacks to using localstorage, so another window which is a viewer will start up.

Let's try this feature on [the sample slide](https://hiroppy.github.io/fusuma/intro/)!

## Features

### Displaying Note

If you use `<!-- note -->` syntax in the slide, you'll see this note in the host screen.

```md
<!-- note
This is a speaker note!!
This sentence can be seen when using Presenter Mode.

😍
-->

## Hello!!
```

![](assets/slide-syntax-speaker-note.png)

### Measuring Time

You can measure speech time and record presenter actions like `start`, `stop` and `move` automatically.

### Recording Presenter Actions Timeline

When you start the timer, the timeline will be recorded.  
When you reset the timer, the timeline will be reset.

![](assets/presenter-mode-timeline.png)

### Recording Your Voice

> This feature uses WebRTC, so you need to check the browser name and version.

You can record your voice for practice and do **time-travel** using the presenter actions timeline. This feature will help you practice your speech.

<!-- The base path is different between local and github pages. -->

<video src="/fusuma/docs/assets/recording.m4v" width="100%" controls></video>

### Drawing [experimental]

If you want to write lines like Fluorescent Marker, this feature will help you. It will be reflected on the client side in real time.

<!-- The base path is different between local and github pages. -->

<video src="/fusuma/docs/assets/live.m4v" width="100%" controls></video>

<br />

You click the extending slide button, this feature will be started up.

![](assets/presenter-mode-drawing-start-up.png)
