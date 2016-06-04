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
    private startPos: number;
    private  orient: string;
    private previousElement:HTMLElement;
    ngOnInit(){
        this.orient = this.orientation.toLowerCase();
        console.log('setting orient to '+this.orient);
        if(this.orient == 'vertical' || this.orient == 'horizontal'){
            this.classMap[this.orient] = true;
        }
        else {
            throw new Error("Grab bar orientation "+this.orientation+" is not an acceptable value. Only 'vertical' and 'horizontal' are accepted.");
        } 
    }
    startGrab(event){
        this.classMap.grabbing = true;
        if(this.orient=='vertical'){
            this.startPos = event.target.offsetWidth;
        }
        else {
            this.startPos = event.target.offsetHeight;
        }
        this.previousElement = event.target.parentElement.previousElementSibling;
        console.log(this.previousElement);
        this.setMouseListeners(event);
    }
    endGrab(){
        this.classMap.grabbing = false;
    }
    setMouseListeners(event){
        var self = this;
        var body = document.getElementsByTagName('body')[0];
        var mouseMoveListener = function(event){
            if(self.orient == 'vertical'){
               self.previousElement.style.width = event.pageX + 'px';
            }
            else {
                self.previousElement.style.height = event.pageY + 'px';
            }
        }
        var mouseUpListener = function(event){
            body.removeEventListener('mousemove', mouseMoveListener);
            body.removeEventListener('mouseup', mouseUpListener);
            self.endGrab();
            console.log("mouseUp");
        }
        body.addEventListener('mousemove', mouseMoveListener);
        body.addEventListener('mouseup', mouseUpListener);
    }

}