# dmp-sass
[![npm version](https://badge.fury.io/js/dmp-sass.svg)](http://badge.fury.io/js/dmp-sass)
[![dependency status](https://david-dm.org/jeroenkruis/dmp-sass.svg)](https://david-dm.org/jeroenkruis)
Get Sassy with dmp-sass for [Documark](https://github.com/mauvm/documark)!

## Usage
1. Include the plugin in document.jade
    ```yaml
    plugins:
      - dmp-sass
    ```
2. Create a `style.scss` file inside `assets/css/`
3. Get [Sassy](http://sass-lang.com/guide)

## Notes
Make sure you insert the plugin before the documark-page-meta executes, otherwise the css will not be added to the document.
