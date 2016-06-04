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
const common_1 = require("@angular/common");
let GrabBarComponent = class GrabBarComponent {
    constructor() {
        this.classMap = { 'vertical': false, 'horizontal': false, grabbing: false };
    }
    ngOnInit() {
        this.orient = this.orientation.toLowerCase();
        console.log('setting orient to ' + this.orient);
        if (this.orient == 'vertical' || this.orient == 'horizontal') {
            this.classMap[this.orient] = true;
        }
        else {
            throw new Error("Grab bar orientation " + this.orientation + " is not an acceptable value. Only 'vertical' and 'horizontal' are accepted.");
        }
    }
    startGrab(event) {
        this.classMap.grabbing = true;
        if (this.orient == 'vertical') {
            this.startPos = event.target.offsetWidth;
        }
        else {
            this.startPos = event.target.offsetHeight;
        }
        this.previousElement = event.target.parentElement.previousElementSibling;
        console.log(this.previousElement);
        this.setMouseListeners(event);
    }
    endGrab() {
        this.classMap.grabbing = false;
    }
    setMouseListeners(event) {
        var self = this;
        var body = document.getElementsByTagName('body')[0];
        var mouseMoveListener = function (event) {
            if (self.orient == 'vertical') {
                self.previousElement.style.width = event.pageX + 'px';
            }
            else {
                self.previousElement.style.height = event.pageY + 'px';
            }
        };
        var mouseUpListener = function (event) {
            body.removeEventListener('mousemove', mouseMoveListener);
            body.removeEventListener('mouseup', mouseUpListener);
            self.endGrab();
            console.log("mouseUp");
        };
        body.addEventListener('mousemove', mouseMoveListener);
        body.addEventListener('mouseup', mouseUpListener);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], GrabBarComponent.prototype, "orientation", void 0);
GrabBarComponent = __decorate([
    core_1.Component({
        selector: 'grab-bar',
        templateUrl: 'app/templates/grabbar.html',
        directives: [common_1.NgClass]
    }), 
    __metadata('design:paramtypes', [])
], GrabBarComponent);
exports.GrabBarComponent = GrabBarComponent;
//# sourceMappingURL=grabbar.component.js.map