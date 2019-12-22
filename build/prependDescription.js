const fs = require("fs");
const path = require("path");
const prepend = require("prepend");
const pkg = require("../package.json");

const BUILT_FILE_PATH = path.resolve(__dirname, "../dist/index.d.ts");

const [major, minor, patch] = pkg.version.split(".");

const version = `${major}.${minor}.${patch}`;

var description = `// Type definitions for Screeps ${version}`;

if (fs.existsSync(BUILT_FILE_PATH)) {
    prepend(BUILT_FILE_PATH, description, function(err) {
        if (err) console.error(err);
    });
}
