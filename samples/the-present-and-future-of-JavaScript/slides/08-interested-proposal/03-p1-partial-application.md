## Partial Application Syntax

stage-1

```javascript
function add(x, y) { return x + y; }

// before
const addOne = add.bind(null, 1); // this, the left(x = 1), the right(y = undefined)
addOne(2); // 3

// after
const addOne = add(1, ?); // apply from the left(x)
addOne(2); // 3

const addTen = add(?, 10); // apply from the right(y)
addTen(2); // 12

const f = (...x) => x;
const g = f(..., 9, ...);
g(1, 2, 3); // [1, 2, 3, 9, 1, 2, 3]

const res = a |> f(?, 1) |> g(?, 2); // const res = g(f(a, 1), 2);
```

<a class="ref-link" href="https://github.com/rbuckton/proposal-partial-application" target="_blank">
  https://github.com/rbuckton/proposal-partial-application
</a>
