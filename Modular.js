var filtMod = require("./mymodule.js");
var dir = process.argv[2];
var filtStr = process.argv[3];

filtMod(dir, filtStr, function (err, list) {
    if (err) return console.error("There was an error:", err);

    list.forEach(function (file) {
        console.log(file);
    });
});
