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
const object_component_1 = require('./object.component');
let OutputComponent = class OutputComponent {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this.log = [];
        var self = this;
    }
    subscribe(stream) {
        var self = this;
        this.stream = stream;
        this.log = [];
        this.stream.subscribe(x => {
            self._ngZone.run(() => {
                self.log.push(x);
            });
        });
    }
};
OutputComponent = __decorate([
    core_1.Component({
        selector: 'scriptpad-output',
        templateUrl: 'app/templates/output.html',
        styleUrls: ['css/output.css'],
        directives: [object_component_1.ObjectComponent]
    }), 
    __metadata('design:paramtypes', [core_1.NgZone])
], OutputComponent);
exports.OutputComponent = OutputComponent;
//# sourceMappingURL=output.component.js.map