var fs          = require('fs');
var path        = require('path');
var sass        = require('node-sass');
var cacheHelper = require('documark-cache');

module.exports = function dmpSass ($, document, done) {
  sass.render({
    file: 'assets/css/style.scss',
    outputStyle: 'compressed',
    sourceMap: false,
    success: function (result) {
      var cache = cacheHelper(document);
      var file = cache.fileWriteStream('sass-cache.css');
      var container = $.('head');

      if ( !container.length ) {
        container = $.root();
      }

      file.end(result.css);
      container.append('<link rel="stylesheet" type="text/css" href="' + cache.filePath('sass-cache.css') + '">');

      done();
    },
    error: function (error) {
      done(error.message);
    }
  });
};
