var fs      = require('fs');
var path    = require('path');
var sass    = require('node-sass');

module.exports = function dmpSass ($, document, done) {
  sass.render({
    file: 'assets/css/style.scss',
    outputStyle: 'compressed',
    sourceMap: false,
    success: function (result) {
      var cache = require('documark-cache')(document);
      var file = cache.fileWriteStream('sass-cache.css');
      file.end(result.css);

      $.root().append('<link rel="stylesheet" type="text/css" href="' + cache.filePath('sass-cache.css') + '">');
    },
    error: function (error) {
      console.log(error.message);
    }
  });

  done();
};
