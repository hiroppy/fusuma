<!-- sectionTitle: Syntax Provided by Fusuma -->

## Syntax Provided by Fusuma

---

## Split Slides

```markdown
## Hello

This is the first slide.

---

## ✌️

This is the second slide.
```

You can split slides within the same file by using `---` syntax.

---

## Add Classes

```markdown
<!-- classes: title -->

## Hello
```

```css
.title {
  color: #3498db;
}
```

Also, you can use HTML because MarkDown accepts HTML.

---

## Declare Section Title

```md
<!-- sectionTitle: this is the second slide! -->

## ✌️
```

```css
/* output with this class name */
.section-title {
  color: #ff0;
  background: #ccc;
}
```

Makes explicit declarations to create an agenda.  
In addition, it is also added to sidebar's list.

<span class="hand">👈</span>

---

## Generate Agenda

```md
## Contents

<!-- contents -->
```

Converts the page number and title name specified by `sectionTitle` into a list of `list(ul/li)`.

---

## Add Speaker Note

```md
<!-- note
This is a speaker note!!
This sentence can be seen when using Presenter Mode.

😍
-->

## Hello!!
```

This is a note displayed on the host side in Presenter Mode.

---

## Capturing Screen Contents

```md
## Capturing Screen Contents

<!-- screen -->
```

Your screen can capture on the slide, but this feature can run only in Presenter Mode.

<br />

You can choose **your local screen** or **application window** or **browser tab** as output.

<br />

This feature will help **live coding** etc. See [Screen Capture API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) for detail.

---

## Output

The following image is a screenshot of the output slide.👇

<br />

<img src="../../../site/docs/assets/slide-syntax-screen.png" class="capture-screen-image" />
