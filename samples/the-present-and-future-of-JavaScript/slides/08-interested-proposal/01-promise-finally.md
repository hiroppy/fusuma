## Promise.prototype.finally

stage-3

```javascript
let finished = false;

fetch()
  .then((res) => {
    // finished = true;
  })
  .catch((err) => {
    // finished = true;
  })
  .finally(() => {
    finished = true;
  });
```

<a class="ref-link" target="_blank" href="https://github.com/tc39/proposal-promise-finally">
  https://github.com/tc39/proposal-promise-finally
</a>
