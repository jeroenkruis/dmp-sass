var sass        = require('node-sass');
var cacheHelper = require('documark-cache');

module.exports = function dmpSass ($, document, done) {
  sass.render({
    file: 'assets/css/base.scss',
    outputStyle: 'compressed',
    sourceMap: false,
    success: function (result) {
      var file       = cacheHelper(document).fileWriteStream('dmp-sass.css');
      var $container = $('head');

      if ( ! $container.length) {
        $container = $.root();
      }

      file.end(result.css);
      $container.append('<link rel="stylesheet" type="text/css" href="file://' + file.path + '"/>');

      done();
    },
    error: function (err) {
      done(err.message);
    }
  });
};
