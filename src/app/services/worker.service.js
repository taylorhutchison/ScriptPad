"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const scriptbuilder_service_1 = require('./scriptbuilder.service');
let ScriptWorker = class ScriptWorker {
    terminate() {
        this.worker.terminate();
        this.worker = undefined;
    }
    execute(code) {
        if (this.worker) {
            this.terminate();
        }
        var self = this;
        var sc = new scriptbuilder_service_1.ScriptBuilder();
        return new Promise((resolve, reject) => {
            sc.make(code)
                .then(function () {
                self.worker = new Worker("./temp/script.js");
                resolve(self.worker);
            }).catch(function (message) {
                reject(message);
            });
        });
    }
};
ScriptWorker = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], ScriptWorker);
exports.ScriptWorker = ScriptWorker;
//# sourceMappingURL=worker.service.js.map