const fs = require("fs");
var file = process.argv[2];
fs.readFile(file, function (err, list) {
    if (err) {
        return console.error(err);
    }
    console.log(list.toString().split("\n").length - 1);
});
