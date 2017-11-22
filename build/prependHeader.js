const fs = require('fs')
const path = require('path')
const prepend = require('prepend')

const BUILT_FILE_PATH = path.resolve(__dirname, '../dist/screeps.d.ts')
const HEADER_TEXT = path.resolve(__dirname, 'header.txt')

if (fs.existsSync(BUILT_FILE_PATH) && fs.existsSync(HEADER_TEXT)) {
    prepend(BUILT_FILE_PATH, fs.readFileSync(HEADER_TEXT), function (err) {
        if (err) console.error(err)
    })
}
