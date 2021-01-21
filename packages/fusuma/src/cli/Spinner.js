'use strict';

const ora = require('ora');

class Spinner {
  constructor() {
    this.spinner = ora();
  }

  start() {
    this.spinner.start();
  }

  stop() {
    this.spinner.stop();
  }

  setContent({ color = 'cyan', text = '' }) {
    this.spinner.color = color;
    this.spinner.text = text;
  }
}

module.exports = Spinner;
