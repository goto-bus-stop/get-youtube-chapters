# get-youtube-chapters change log

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](http://semver.org/).

## 2.0.0
* Support zero-prefixed style: `00:00 Chapter Title`. Thanks @Kacper-Lubisz!
* Support bracketed styles: `[0:00] Chapter Title` / `(0:00) Chapter Title`. Thanks @unreleased!
* Remove `extended: true` option. YouTube now supports the formats that the option enabled,
  so the library has also accepts those formats by default.
* The library now uses some ES6 syntax like `const`. If you are targeting pre-modern browsers,
  you may need to configure a transpiler.

## 1.1.0
* Add typescript types.

## 1.0.0
* Initial release.
