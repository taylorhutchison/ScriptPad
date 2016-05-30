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
const worker_service_1 = require('../services/worker.service');
const keyboard_1 = require('../services/keyboard');
let InputComponent = class InputComponent {
    constructor(_scriptWorker, _keyboard) {
        this._scriptWorker = _scriptWorker;
        this._keyboard = _keyboard;
        this.scriptWorker = _scriptWorker;
        this.keyboard = _keyboard;
    }
    onKeyDown(event) {
        this.keyboard.preventDefaultTab(event);
    }
    onKeyUp(event) {
        this.keyboard.insertTab(event);
    }
    executeScript() {
        return this.scriptWorker.execute(this.code);
    }
};
InputComponent = __decorate([
    core_1.Component({
        selector: 'scriptpad-input',
        templateUrl: 'app/templates/input.html',
        styleUrls: ['css/input.css'],
        providers: [worker_service_1.ScriptWorker, keyboard_1.Keyboard]
    }), 
    __metadata('design:paramtypes', [worker_service_1.ScriptWorker, keyboard_1.Keyboard])
], InputComponent);
exports.InputComponent = InputComponent;
//# sourceMappingURL=input.component.js.map