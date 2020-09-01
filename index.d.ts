/**
Convert a webm video to mp4.
@param webmData The webm data to convert.
@example
```
const { promises: fs } = require("fs");
const webmToMp4 = require("webm-to-mp4");

await fs.writeFile("file.mp4", webmToMp4(await fs.readFile("file.webm")));
```
*/
declare function webmToMp4(webmData: Iterable<number>): ArrayBuffer

export = webmToMp4
