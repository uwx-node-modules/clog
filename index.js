'use strict';

const chalk = require('chalk');
Object.keys(chalk).forEach(k => {
  exports[k] = function(...args) {
    console.log(chalk[k](...args));
  };
});