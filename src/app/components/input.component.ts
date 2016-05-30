import {Component} from "@angular/core";
import {ScriptWorker} from '../services/worker.service';
import {Keyboard} from '../services/keyboard';

@Component({
    selector: 'scriptpad-input',
    templateUrl: 'app/templates/input.html',
    styleUrls: ['css/input.css'],
    providers: [ScriptWorker, Keyboard]
})
export class InputComponent {
    code: string;
    scriptWorker: ScriptWorker;
    keyboard:Keyboard;
    constructor(private _scriptWorker: ScriptWorker, private _keyboard: Keyboard){
        this.scriptWorker = _scriptWorker;
        this.keyboard = _keyboard;
    }
    onKeyDown(event){
        this.keyboard.preventDefaultTab(event);
    }
    onKeyUp(event){
        this.keyboard.insertTab(event);
    }
    executeScript() {
        return this.scriptWorker.execute(this.code);
    }
}