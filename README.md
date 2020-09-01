# webm-to-mp4 [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/webm-to-mp4/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/webm-to-mp4)

Convert a webm video to mp4.

Useful for handling [MediaRecorder](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder) output.

[![NPM Badge](https://nodei.co/npm/webm-to-mp4.png)](https://npmjs.com/package/webm-to-mp4)

## Install

```sh
npm install webm-to-mp4
```

## Usage

```js
const { promises: fs } = require("fs");
const webmToMp4 = require("webm-to-mp4");

await fs.writeFile("file.mp4", Buffer.from(webmToMp4(await fs.readFile("file.webm"))));
```

## API

### webmToMp4(webmData)

#### input

Type: `Iterable` (includes Buffers, ArrayBuffers and Uint8Arrays)

The webm data to convert.
