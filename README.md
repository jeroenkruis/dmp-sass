# dmp-sass
[![npm version](https://badge.fury.io/js/dmp-sass.svg)](http://badge.fury.io/js/dmp-sass)
[![dependency status](https://david-dm.org/jeroenkruis/dmp-sass.svg)](https://david-dm.org/jeroenkruis)

> Get Sassy with dmp-sass for [Documark](https://github.com/mauvm/documark)!

This plugin adds support for (Sass)[http://sass-lang.com/].

## Usage
1. Include the plugin in the [front-matter](https://github.com/jxson/front-matter) section of the document.jade file

	```yaml
	plugins:
		- dmp-sass
	```

2. Create a `base.scss` file inside `assets/css/`
3. Get [Sassy](http://sass-lang.com/guide)

## Notes
Make sure you insert the plugin before the [documark-page-meta](https://github.com/mauvm/documark-page-meta) plugin executes, otherwise the css will not be added to the document. Usually theme's for Documark will use this plugin. The code below serves as an example on how to accomplish this.

```yaml
plugins:
	- dmp-sass
	- documark-theme-default
```
