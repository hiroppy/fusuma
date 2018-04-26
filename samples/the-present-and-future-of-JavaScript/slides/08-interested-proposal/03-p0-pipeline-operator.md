## Pipeline Operator

stage-1

```javascript
function doubleSay (str) { return str + ', ' + str; }
function capitalize (str) { return str[0].toUpperCase() + str.substring(1); }
function exclaim (str) { return str + '!'; }

// exclaim(capitalize(doubleSay('hello'))); // 'Hello, hello!'
let result = "hello"
  |> doubleSay // the argument is 'hello'
  |> capitalize
  |> exclaim;  // 'Hello, hello!'

function double (x) { return x + x; }
function add (x, y) { return x + y; }
function boundScore (min, max, score) { return Math.max(min, Math.min(max, score)); }

// boundScore(0, 100, add(7, double(person.score)));
let newScore = 25
  |> double                      // the argument is 25
  |> _ => add(7, _)              // `_` is the return value of `double`
  |> _ => boundScore(0, 100, _); // 57 // `_` is the return value of `add`
```

<a class="ref-link" href="https://github.com/tc39/proposal-pipeline-operator" target="_blank">
  https://github.com/tc39/proposal-pipeline-operator 
</a>
