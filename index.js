var fs = require('fs');
var path = require('path');
var sass = require('node-sass');

module.exports = function documark-sass ($, document, done) {
  sass.renderSync({
    file: 'assets/css/style.scss',
    outputStyle: 'compressed',
    outFile: 'assets/css/style.css',
    sourceMap: false
  });

  done();
};
