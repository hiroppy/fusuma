## Execute JavaScript

<!-- executable-code -->

```js
console.log('yay');

const a = 1;
const b = 2;

console.log(a + b);
```

---

<!-- executable-code -->

```js
// 例なのでESM等の対応はないが仕組みは一緒
// IIFEの引数に全てのモジュールが入ったobjectを渡す
((modules) => {
  const usedModules = {};

  function require(moduleId) {
    if (usedModules[moduleId]) {
      return usedModules[moduleId].exports;
    }

    // ModuleId(0, 1, ...)を入れ、最低限必要なexportsを定義し初期化
    const module = (usedModules[moduleId] = { exports: {} });

    // 自身の関数であるrequireを渡すことにより、それぞれのモジュール内でこの関数を実行し再帰走査する
    // つまり、それぞれのモジュール内のmodule/requireはここで上書きされる
    modules[moduleId](module, module.exports, require);

    return module.exports;
  }

  return require(0); // entry pointである0(index.js)から開始
})({
  0 /*index.js*/: function (module, exports, require) {
    const m = require(1);
    m('hello world');
  },
  1 /* foo.js */: function (module, exports, require) {
    module.exports = function m(txt) {
      console.log('module', txt);
    };
  },
});
```
