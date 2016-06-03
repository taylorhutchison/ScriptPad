import {Component, Input, OnInit} from "@angular/core";
import {NgClass} from "@angular/common";

@Component({
    selector:'grab-bar',
    templateUrl: 'app/templates/grabbar.html',
    directives: [NgClass] 
})
export class GrabBarComponent {
    @Input() orientation: string;
    classMap = { 'vertical': false, 'horizontal': false, grabbing: false };
    ngOnInit(){
        var orient = this.orientation.toLowerCase();
        if(orient == 'vertical' || orient == 'horizontal'){
            this.classMap[orient] = true;
        }
        else {
            throw new Error("Grab bar orientation "+this.orientation+" is not an acceptable value. Only 'vertical' and 'horizontal' are accepted.");
        } 
    }
    startGrab(){
        this.classMap.grabbing = true;
    }
    endGrab(){
        this.classMap.grabbing = false;
    }
    getSiblings(event) {
        var grabbar = event.target.parentElement;
        var previousElement = grabbar.previousElementSibling;
        var nextElement = grabbar.nextElementSibling;
    }
}