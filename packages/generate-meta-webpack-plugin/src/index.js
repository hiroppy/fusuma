'use strict';

const { writeFile } = require('fs').promises;
const { join } = require('path');
const { validate } = require('schema-utils');

const schema = {
  type: 'object',
  properties: {
    data: {
      type: 'object',
      properties: {
        updatedAt: {
          type: 'number',
        },
      },
    },
    filename: {
      type: 'string',
    },
  },
};

class GenerateMetaPlugin {
  constructor(options = {}) {
    this.name = 'generate-meta-webpack-plugin';
    this.options = options;

    validate(schema, options, this.name);
  }

  apply(compiler) {
    compiler.hooks.done.tapPromise(this.name, async ({ hash }) => {
      await writeFile(
        join(compiler.outputPath, this.options.filename),
        JSON.stringify({ hash, ...this.options.data })
      );
    });
  }
}

module.exports = GenerateMetaPlugin;
