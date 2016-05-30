import {Injectable} from "@angular/core";

@Injectable()
export class Keyboard {
    preventDefaultTab(event){
        if(event.keyCode==9){
            event.preventDefault();
        }
    }
    insertTab(event){
        if(event.keyCode==9){
            var start = event.target.selectionStart;
            var end = event.target.selectionEnd;
            event.target.value = (event.target.value.substring(0, start) + "    "+ event.target.value.substring(end));
            event.target.selectionStart = event.target.selectionEnd = start + 4;
        }
    }
}