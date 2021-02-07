'use strict';

const { readFile } = require('fs').promises;
const { join } = require('path');
const globby = require('globby');
const { getOptions } = require('loader-utils');
const mdx = require('@mdx-js/mdx');
const config = require('prismjs/components');
const getLoader = require('prismjs/dependencies');
const t = require('@babel/types');
const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');
const { default: generate } = require('@babel/generator');

async function prismLoader(src) {
  const { dirPath, theme, plugins } = getOptions(this);
  const cb = this.async();
  const langs = new Set();
  const importedFiles = new Set();
  const normalizeImportPath = (type) => (name) =>
    `prismjs/${config[type].meta.path.replace(/\{id\}/g, name)}`;

  for await (const path of globby.stream(join(dirPath, '**', '*.{md,mdx}'))) {
    mdx(await readFile(path), {
      remarkPlugins: [
        () => (tree) => {
          // TODO: use visit of unist-util-visit
          for (const { type, lang } of tree.children) {
            if (type === 'code') {
              langs.add(lang);
            }
          }
        },
      ],
    });
  }

  const prismModules = getLoader(config, [...Array.from(langs), ...plugins]).getIds();

  // add theme
  importedFiles.add(
    normalizeImportPath('themes')(theme === 'default' ? 'prism' : `prism-${theme}`)
  );

  for (const name of prismModules) {
    if (config.plugins[name]) {
      const basePath = normalizeImportPath('plugins')(name);

      if (!config.plugins[name].noCSS) {
        importedFiles.add(`${basePath}.css`);
      }
      importedFiles.add(basePath);
    } else if (config.languages[name]) {
      importedFiles.add(normalizeImportPath('languages')(name));
    }
  }

  const ast = parse(src, { sourceType: 'module' });

  traverse(ast, {
    ImportDeclaration(path) {
      if (path.node.source.value === 'prismjs') {
        path.replaceWith(
          t.importDeclaration(
            path.node.specifiers,
            t.stringLiteral(`prismjs/${config.core.meta.path}`)
          )
        );
        path.insertAfter(
          Array.from(importedFiles).map((p) => t.importDeclaration([], t.stringLiteral(p)))
        );
      }
    },
  });

  cb(null, generate(ast).code);
}

module.exports = prismLoader;
