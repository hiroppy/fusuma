<!-- section-title: Syntax Provided by Fusuma -->

## Syntaxes Provided by Fusuma

Basically, you don't have to code js and css so you can focus on coding Markdown to create your slide.  
Fusuma provides some features using HTML comments.

---

## Splitting Slides

```markdown
## Hello

This is the first slide.

---

## ✌️

This is the second slide.
```

<br />

You can split slides within the same file by using `---` syntax.

---

## Adding Classes

```markdown
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

## Creating `div` tag with class name

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

## Setting Background

<!-- background: '../assets/background.jpeg' -->

```md
<!-- background: '../assets/background.jpeg' -->

Also, you can specify hexadecimal and names.

<!-- background: #f5f5f5 -->
<!-- background: green -->
```

---

## Declaring Section Title

```md
<!-- section-title: this is the second slide! -->

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

## Generating Agenda

```md
## Contents

<!-- contents -->
```

<br />

Converts the page number and title name specified by `section-title` into a ToC component.

---

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

## Generating QR Code

```md
<!-- qr: https://github.com/hiroppy/fusuma -->
```

<!-- qr: https://github.com/hiroppy/fusuma -->
