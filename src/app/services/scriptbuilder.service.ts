import {Injectable} from "@angular/core";
import * as fs from "fs";
import {Observable} from "Rxjs";
Injectable()
export class ScriptBuilder {
    make(code:string) {
         return new Promise<string>((resolve, reject) => {
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