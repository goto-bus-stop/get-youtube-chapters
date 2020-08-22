# get-youtube-chapters

parse chapters from a youtube video description

[Install](#install) - [Usage](#usage) - [License: Apache-2.0](#license)

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

YouTube now parses "chapters" from video descriptions like this:

![screenshot][screenshot-image]

This package aims to implement more-or-less similar parsing so you can figure
out which chapters a video has on your own.

[npm-image]: https://img.shields.io/npm/v/get-youtube-chapters.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/get-youtube-chapters
[travis-image]: https://img.shields.io/travis/com/goto-bus-stop/get-youtube-chapters.svg?style=flat-square
[travis-url]: https://travis-ci.com/goto-bus-stop/get-youtube-chapters
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[screenshot-image]: ./.github/screenshot.png

## Install

```
npm install get-youtube-chapters
```

## Usage

Pass in a description string:

```js
var youtubeChapters = require('get-youtube-chapters')
var chapters = youtubeChapters(`
This is a sample description for a video with a track listing!

0:00 Intro
1:36 BOCA
4:44 Break the wall
8:29 Can't get you out of my mind
12:09 Dear
15:55 BOCA (Inst.)
`)

assert.deepStrictEqual(chapters, [
  { start: 0, title: 'Intro' },
  { start: 96, title: 'BOCA' },
  { start: 284, title: 'Break the wall' },
  { start: 509, title: "Can't get you out of my mind" },
  { start: 729, title: 'Dear' },
  { start: 955, title: 'BOCA (Inst.)' }
])
```

The return value is an array of `{ start, title }` objects. `start` is the start
time in seconds. Chapters run until the start of the next chapter, or the end of
the video.

This package can be a little more loose than YouTube itself is. This can be
useful if you want to support eg. older album uploads that do not _quite_
follow the chapter format. To do so, set `extended: true`:

```js
var chapters = youtubeChapters(description, {
  extended: true
})
```

By default, extended parsing is disabled.

## License

[Apache-2.0](LICENSE.md)
