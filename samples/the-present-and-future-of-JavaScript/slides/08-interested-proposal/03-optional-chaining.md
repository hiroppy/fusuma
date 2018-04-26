## Optional Chaining

stage-1

```javascript
// before
const fooInput = myForm.querySelector('input[name=foo]');
const fooValue = fooInput ? fooInput.value : undefined;

// after
const fooValue = myForm.querySelector('input[name=foo]')?.value;

const obj = {
  foo: {
    bar: {
      baz: 42
    }
  }
};

obj?.foo?.bar?.baz;   // 42
obj?.qux?.baz;        // undefined
obj?.foo.bar.qux?.(); // undefined
```

<a class="ref-link" href="https://github.com/tc39/proposal-optional-chaining" target="_blank">
  https://github.com/tc39/proposal-optional-chaining
</a>
