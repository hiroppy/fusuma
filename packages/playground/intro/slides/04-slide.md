<!-- section-title: Syntax Provided by Fusuma -->

## Syntaxes Provided by Fusuma

Basically, you don't have to code js and css so you can focus on coding Markdown to create your slide.  
Fusuma provides some features using HTML comments.

---

## Splitting Slides

<!-- description:
Besides splitting by file, you can split slides using ---.
-->
<!-- url:
https://hiroppy.github.io/fusuma/syntaxes/0?sidebar=false
 -->

```md
## Hello😃

---

## Bye👋
```

<br />

You can split slides within the same file by using `---` syntax.

---

<!-- url:
https://hiroppy.github.io/fusuma/syntaxes/1?sidebar=false
 -->

<!-- description:
Add classes to the top level of a slide container.
 -->

## Adding Classes

```md
<!-- classes: title, main -->

## Hello
```

```css
.title h2 {
  color: #161d6f;
}

.main {
  background: #eae3c8;
}
```

<br />

These classes attach to the top level of a slide container.

---

<!-- url:
https://hiroppy.github.io/fusuma/syntaxes/2?sidebar=false
 -->

<!-- description:
Create a div tag to cover Markdown and also it's possible to attach classes.
 -->

## Creating a div tag with class names

This example uses grid classes(`.grid`, `.column`).

```md
<!-- block-start: grid -->

<!-- block-start: column -->

left

<!-- block-end -->

<!-- block-start: column -->

right

<!-- block-end -->

<!-- block-end -->
```

👇

<!-- block-start: grid -->

<!-- block-start: column -->

left

<!-- block-end -->

<!-- block-start: column -->

right

<!-- block-end -->

<!-- block-end -->

---

<!-- url:
https://hiroppy.github.io/fusuma/syntaxes/3?sidebar=false
 -->

<!-- description:
Fragments are used to reveal individual elements incrementally on a slide.
-->

## Fragments

```md
<!-- fragments-start -->

✍

🤟

👍

<!-- fragments-end -->
```

<!-- fragments-start -->

✍️

🤟

👍

<!-- fragments-end -->

---

<!-- classes: setting-background -->
<!-- url:
https://hiroppy.github.io/fusuma/syntaxes/4?sidebar=false
 -->
<!-- description:
Set a background image(color) to a slide easily.
-->

## Setting Background

<!-- background: '../assets/background.jpeg' -->

```md
<!-- background: '../assets/background.jpeg' -->

Also, you can specify hexadecimal and names.

<!-- background: #f5f5f5 -->
<!-- background: green -->
```

---

<!-- url:
https://hiroppy.github.io/fusuma/syntaxes/5
 -->
<!-- description:
Makes explicit declarations to create a table of contents and it is also added to the sidebar's list. In addition, attaches section-title class to the slide automatically.
-->

## Declaring Section Title

```md
<!-- section-title: introducing section-title -->

This slide has the title of a section!  
👈 see the sidebar!
```

```css
/* output with this class name */
.section-title {
  color: #0a043c;
  background: #a3ddcb;
}
```

<br />

Makes explicit declarations to create an agenda.  
In addition, it is also added to sidebar's list.

---

<!-- url:
https://hiroppy.github.io/fusuma/syntaxes/6
 -->
<!-- description:
Insert titles written as section-title to ToC component automatically. This class name is .toc.
-->

## Generating Agenda

```md
## Contents

<!-- contents -->
```

<br />

Converts the page number and title name specified by `section-title` into a ToC component.

---

<!-- url:
https://hiroppy.github.io/fusuma/syntaxes/7
 -->
<!-- description:
Show notes during making your speech on the host of Presenter mode. You can change the mode to Presenter on the sidebar.
 -->

## Adding Speaker Note

```md
<!-- note
This is a speaker note!!
This sentence can be seen when using Presenter Mode.

😍
-->

## Hello!!
```

<br />

Displays notes for each slide in presenter mode.

---

## Generating Links for SNS

```md
<!-- account: twitter, about_hiroppy -->
<!-- account: github, hiroppy -->
<!-- account: facebook, yuta.hiroto0429 -->
<!-- account: linkedin, hiroppy -->
```

```css
:root {
  --account-icon-size: 3rem;
  --account-icon-color: #545454;
}

/* these classes are attached */
.account-twitter,
.account-github,
.account-facebook,
.account-linkedin {
}
```

<!-- account: twitter, about_hiroppy -->
<!-- account: github, hiroppy -->
<!-- account: facebook, yuta.hiroto0429 -->
<!-- account: linkedin, hiroppy -->

---

<!-- url:
https://hiroppy.github.io/fusuma/syntaxes/8?sidebar=false
 -->
<!-- description:
Execute JavaScript code when the button is clicked. If you use console.log, the context will be outputted.
-->

## Executing JavaScript Code

Executes JavaScript code when the button is clicked. If you use `console.log`, the context will be outputted.

<!-- executable-code -->

```javascript
alert('hi!!');
console.log('hi!');
```

```md
<!-- executable-code -->

\`\`\`javascript
alert('hi!!');
console.log('hi!');
\`\`\`
```

---

<!-- url:
https://hiroppy.github.io/fusuma/syntaxes/9?sidebar=false
 -->
<!-- description:
Expand QR Code to a slide.
-->

## Generating QR Code

```md
<!-- qr: https://github.com/hiroppy/fusuma -->
```

```css
:root {
  --qr-code-image-size: 320px; /* the default size */
}
```

<!-- qr: https://github.com/hiroppy/fusuma -->
