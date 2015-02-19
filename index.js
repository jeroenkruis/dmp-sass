var fs      = require('fs');
var path    = require('path');
var sass    = require('node-sass');

module.exports = function dmpSass ($, document, done) {
  sass.render({
    file: 'assets/css/style.sass',
    outputStyle: 'compressed',
    sourceMap: false,
    success: function (result) {
      var cache = require('documark-cache')(document);
      var file = cache.fileWriteStream('sass-cache-compiled.css');

      document.config().pdf.userStyleSheet = 'file://' + cache.filePath('sass-cache-compiled.css');
      file.end(result.css);
    },
    error: function (error) {
      console.log(error.message);
    }
  });

  done();
};
