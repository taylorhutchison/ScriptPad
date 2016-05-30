import {Component, Output, EventEmitter} from '@angular/core';
import {Command} from '../command';
import {Themer} from '../services/themer.service';
@Component({
    selector: 'scriptpad-menu',
    templateUrl: 'app/templates/menu.html',
    providers: [Themer]
})
export class MenuComponent {
    @Output() command = new EventEmitter<Command>();
    availableThemes: Array<any>;
    constructor(private _themer: Themer){
        this.availableThemes = this._themer.getThemes();
    }
    executeScript() {
        var commandObj = new Command("runscript");
        this.command.emit(commandObj);
    };
}