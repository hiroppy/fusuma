## Promise.try
stage-1

```javascript
function getUserById(id) {
  return Promise.try(() => {
    if (typeof id !== 'number') {
      throw new Error('id must be a number');
    }

    return db.getUserById(id);
  });
}
```

<a class="ref-link" href="https://github.com/tc39/proposal-promise-try" target="_blank">
  https://github.com/tc39/proposal-promise-try
</a>
