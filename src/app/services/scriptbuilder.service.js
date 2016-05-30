"use strict";
const core_1 = require("@angular/core");
const fs = require("fs");
core_1.Injectable();
class ScriptBuilder {
    make(code) {
        return new Promise((resolve, reject) => {
            fs.readFile('./scriptbuilder.js', 'utf8', function (err, contents) {
                var n = contents.replace("//REPLACE", code);
                fs.writeFile('./temp/script.js', n, function (err) {
                    if (err) {
                        reject(err.message);
                    }
                    resolve("done");
                });
            });
        });
    }
}
exports.ScriptBuilder = ScriptBuilder;
//# sourceMappingURL=scriptbuilder.service.js.map