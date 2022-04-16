const fs = require("fs");
const path = require("path");

fs.readdir(path.join(__dirname, "..", "src"), function(err, files) {
    files = files.map(function(value) {
        return path.join("src", value);
    });

    Promise.all(files.map((name)=>fs.promises.readFile(name))).then(
    (fileContents)=>{
        fs.writeFileSync(path.join(__dirname, "..", "dist", "index.d.ts"),
                         Buffer.concat(fileContents));
    }, (reason)=>{
        console.log(reason);
    });
});
