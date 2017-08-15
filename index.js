'use strict';

module.exports = console.log.bind(console);

const chalk = require('chalk');
Object.getOwnPropertyNames(Object.getPrototypeOf(Object.getPrototypeOf(require('chalk')))).forEach(k => {
  module.exports[k] = function(...args) {
    console.log(chalk[k](...args));
  };
});