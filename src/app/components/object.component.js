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
const string_component_1 = require("./types/string.component");
const number_component_1 = require("./types/number.component");
const typedetection_service_1 = require('../services/typedetection.service');
let ObjectComponent = class ObjectComponent {
    constructor(_typeDetection) {
        this._typeDetection = _typeDetection;
    }
    ngOnInit() {
        this.type = this._typeDetection.gettype(this.objval);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], ObjectComponent.prototype, "objval", void 0);
ObjectComponent = __decorate([
    core_1.Component({
        selector: 'object-out',
        templateUrl: 'app/templates/object.html',
        directives: [string_component_1.StringTypeComponent, number_component_1.NumberTypeComponent]
    }), 
    __metadata('design:paramtypes', [typedetection_service_1.TypeDetection])
], ObjectComponent);
exports.ObjectComponent = ObjectComponent;
//# sourceMappingURL=object.component.js.map