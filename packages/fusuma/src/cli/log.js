'use strict';

const chalk = require('chalk');

function info(type, text) {
  console.info(chalk.black.bgCyan(type), chalk.cyan(text));
}

function warn(type, text) {
  console.warn(chalk.black.bgYellow(type), chalk.yellow(text));
}

function error(type, text) {
  console.error(chalk.black.bgRed(type), chalk.red(text));
}

module.exports = {
  info,
  warn,
  error,
};
