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
const command_1 = require('../command');
const themer_service_1 = require('../services/themer.service');
let MenuComponent = class MenuComponent {
    constructor(_themer) {
        this._themer = _themer;
        this.command = new core_1.EventEmitter();
        this.availableThemes = this._themer.getThemes();
    }
    executeScript() {
        var commandObj = new command_1.Command("runscript");
        this.command.emit(commandObj);
    }
    ;
};
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], MenuComponent.prototype, "command", void 0);
MenuComponent = __decorate([
    core_1.Component({
        selector: 'scriptpad-menu',
        templateUrl: 'app/templates/menu.html',
        providers: [themer_service_1.Themer]
    }), 
    __metadata('design:paramtypes', [themer_service_1.Themer])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map