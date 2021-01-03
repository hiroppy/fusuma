---
id: slide-css
title: Slide CSS
sidebar_label: Slide CSS
---

Fusuma uses [WebSlides](https://webslides.tv/) and it provides various custom css. [webslides/classes](https://webslides.tv/demos/classes#slide=1)

<iframe src="https://webslides.tv/demos/classes" style="width: 100%;height: 540px; max-width: 960px"></iframe>

<br />

These css are not customized on the Fusuma side.

## Components

Fusuma provides some components wrapping webSlides.

### FlexBlock

```js
import { Flex } from '@fusuma/client';

<Flex
  items={[
    <div>Item 1 Multipurpose: services, features, specs...</div>,
    <div>Item 2 Multipurpose: services, features, specs...</div>,
    <div>Item 3 Multipurpose: services, features, specs...</div>,
    <div>Item 4 Multipurpose: services, features, specs...</div>,
  ]}
/>;
```

### Card

```js
// card.mdx
// if you want to expand as fullscreen <!-- classes: fullscreen -->

import { Card } from '@fusuma/client';

<Card
  left={<img src="https://source.unsplash.com/8lODM_TYmkI/800x600" />}
  right={
    <>
      <h2>Card</h2>
    </>
  }
/>;
```

![](assets/card-component.png)

### Image

```js
import { Img } from '@fusuma/client';

<Img src="https://source.unsplash.com/8lODM_TYmkI/800x600">
  <h3>Yosemite National Park</h3>
  <p>😆</p>
</Img>;
```
