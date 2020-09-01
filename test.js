const test = require("ava")
const isArrayBuffer = require("is-array-buffer")
const { promises: fs } = require("fs")
const webmToMp4 = require(".")

test("main", async t => {
	t.true(isArrayBuffer(webmToMp4(await fs.readFile("fixture.webm"))))
})
