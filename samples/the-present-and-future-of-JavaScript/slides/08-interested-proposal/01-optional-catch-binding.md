## Optional Catch Binding
stage-3

```javascript
let data;

try {
  data = JSON.parse(str);
} catch { //  you don't need the binding `()`
  data = 'default';
}
```

<a class="ref-link" href="https://github.com/tc39/proposal-optional-catch-binding" target="_blank">
  https://github.com/tc39/proposal-optional-catch-binding
</a>
