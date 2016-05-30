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
const menu_component_1 = require('./menu.component');
const layers_component_1 = require('./layers.component');
const input_component_1 = require('./input.component');
const output_component_1 = require('./output.component');
const Rxjs_1 = require('Rxjs');
const typedetection_service_1 = require('../services/typedetection.service');
let AppComponent = class AppComponent {
    runcommand(event) {
        var self = this;
        switch (event.name) {
            case "runscript":
                this.inputComponent.executeScript()
                    .then(function (worker) {
                    var stream = Rxjs_1.Observable.create(observer => {
                        worker.onmessage = function (e) {
                            observer.next(e.data);
                        };
                    });
                    self.outputComponent.subscribe(stream);
                });
                break;
            default:
                console.log("Unknown command issued: " + event.name);
                break;
        }
    }
};
__decorate([
    core_1.ViewChild(input_component_1.InputComponent), 
    __metadata('design:type', input_component_1.InputComponent)
], AppComponent.prototype, "inputComponent", void 0);
__decorate([
    core_1.ViewChild(output_component_1.OutputComponent), 
    __metadata('design:type', output_component_1.OutputComponent)
], AppComponent.prototype, "outputComponent", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'scriptpad',
        templateUrl: 'app/templates/app.html',
        directives: [menu_component_1.MenuComponent, layers_component_1.LayersComponent, input_component_1.InputComponent, output_component_1.OutputComponent],
        providers: [typedetection_service_1.TypeDetection]
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map