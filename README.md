# dmp-sass
[![npm version](https://badge.fury.io/js/dmp-sass.svg)](http://badge.fury.io/js/dmp-sass)
[![dependency status](https://david-dm.org/jeroenkruis/dmp-sass.svg)](https://david-dm.org/jeroenkruis)

Get Sassy with dmp-sass for [Documark](https://github.com/mauvm/documark)!

This plugin adds support for Sass.

## Usage
1. Include the plugin in the [front-matter](https://github.com/jxson/front-matter) section of the document.jade file
2. Create a `base.scss` file inside `assets/css/`
3. Get [Sassy](http://sass-lang.com/guide)

## Notes
Make sure you insert the plugin before the documark-page-meta executes, otherwise the css will not be added to the document.
