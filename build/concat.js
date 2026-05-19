import fs from "fs";
import path from "path";

const __dirname = import.meta.dirname

const HEADER = `// Please contribute types to https://github.com/screepers/typed-screeps`

fs.readdir(path.join(__dirname, "..", "src"), function (err, files) {
    files = files.map(function (value) {
        return path.join("src", value);
    });

    Promise.all(files.map((name) => fs.promises.readFile(name))).then(
        (fileContents) => {
            fs.writeFileSync(path.join(__dirname, "..", "dist", "index.d.ts"), HEADER + "\n\n" + Buffer.concat(fileContents));
        },
        (reason) => {
            console.log(reason);
        },
    );
});
