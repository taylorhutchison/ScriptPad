import {Injectable} from "@angular/core";
import {Observable} from "Rxjs";
import {ScriptBuilder} from './scriptbuilder.service';

@Injectable()
export class ScriptWorker {
    worker: Worker;
    terminate(){
        this.worker.terminate();
        this.worker = undefined;
    }
    execute(code){
        if(this.worker){
            this.terminate();
        }
        var self = this;
        var sc = new ScriptBuilder();
        return new Promise<Worker>((resolve, reject) => {
            sc.make(code)
                .then(function () {
                    self.worker = new Worker("./temp/script.js");
                    resolve(self.worker);
                }).catch(function (message) {
                    reject(message);
                });
        });
    }
}