---
id: math-chart
title: Math, Diagrams, and Flowcharts
sidebar_label: Math, Diagrams, and Flowcharts
---

## Math

Fusuma supports MathJax via KaTex when `slide.math` is `true`. This value is `false` as a default.

```yml
# .fusumarc.yml
slide:
  math: true
```

![](assets/mathjax.png)

## Diagrams and Flowcharts

Fusuma supports [mermaid](https://github.com/knsv/mermaid) when `slide.chart` is `true`. This value is `false` as a default.

```yml
# .fusumarc.yml
slide:
  chart: true
```

![](assets/chart.png)

## Sample Slide

<iframe src="https://hiroppy.github.io/fusuma/advanced/" style="width: 100%; height: 540px; maxWidth: 960px;"></iframe>
