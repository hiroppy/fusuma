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

```markdown
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

```markdown
## Contents

<!-- contents -->
```

Converts the page number and title name specified by `sectionTitle` into a list of `list(ul/li)`.

---

## Add Speaker Note

```markdown
<!-- note
This is a speaker note!!
This sentence can be seen when using Presenter Mode.

😍
-->

## Hello!!
```

This is a note displayed on the host side in Presenter Mode.
