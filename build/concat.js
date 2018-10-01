const concat = require("concat-files");
const fs = require("fs");
const path = require("path");

fs.readdir(path.join(__dirname, "..", "src"), function(err, files) {
    files = files.map(function(value) {
        return path.join("src", value);
    });

    concat(files, path.join(__dirname, "..", "dist", "index.d.ts"), function(err) {
        if (err) {
            console.dir(err);
        }
    });
});
