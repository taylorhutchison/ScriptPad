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
const core_1 = require('@angular/core');
const plain_1 = require('./plain');
let MyClassComponent = class MyClassComponent extends plain_1.MyClass {
    constructor(_test) {
        super();
        this._test = _test;
        console.log("hi");
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], MyClassComponent.prototype, "test", void 0);
MyClassComponent = __decorate([
    core_1.Component({}), 
    __metadata('design:paramtypes', [(typeof (_a = typeof plain_1.MyClass !== 'undefined' && plain_1.MyClass) === 'function' && _a) || Object])
], MyClassComponent);
exports.MyClassComponent = MyClassComponent;
var _a;
//# sourceMappingURL=plain.component.js.map