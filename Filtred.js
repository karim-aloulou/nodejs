const fs = require("fs");
var path = require("path");
var filepath = process.argv[2];
var ext = "." + process.argv[3];
fs.readdir(filepath, function (err, list) {
    if (err) {
        return console.error(err);
    }
    list.forEach((file) => {
        path.extname(file) == ext ? console.log(file) : file;
    });
});
