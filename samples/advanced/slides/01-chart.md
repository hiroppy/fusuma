<!-- section-title: Charts -->

## Charts

<br />

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

https://github.com/knsv/mermaid

---

### Markdown

<br />

```txt
\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`
```

<br />

### .fusumarc

<br />

```yml
slide
  chart: true  # the default is false
```

---

## Diagrams

<br />

```chart
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2              :         des4, after des3, 5d
```

---

```mermaid
gitGraph:
options
{
  "nodeSpacing": 150,
  "nodeRadius": 10
}
end
commit
branch newbranch
checkout newbranch
commit
commit
checkout master
commit
commit
merge newbranch
```
