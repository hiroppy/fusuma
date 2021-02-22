<!-- classes: title -->
<!-- background: #f8f1f1 -->

<!-- note
Here is a speaker note.😎

Node.js spent a long time implementing ESM.
Node.js had two major problems that browsers don't have.

One is that Node.js cannot recognize if a file is written in ESM.
In the case of browsers, it can be recognized because it is written as `module` in the `type` attribute.
However, Node.js' import doesn't have an attribute like the `type`.
So we decided to look at the file extensions to be imported.
We made a rule that a file with the `.mjs` extension is written in ESM.

And another issue is compatibility with existing CJS Modules.
Node.js values backward compatibility. However, Node.js already has a module system.
It's very difficult to implement ESM so as not to break the existing code.
-->

# Introducing Fusuma

<!-- block-start: grid, sns-box -->
<!-- account: twitter, about_hiroppy -->
<!-- account: github, hiroppy -->
<!-- account: facebook, yuta.hiroto0429 -->
<!-- account: linkedin, hiroppy -->
<!-- block-end -->
