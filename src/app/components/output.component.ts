import {Component, Input, NgZone} from "@angular/core";
import {Observable} from "Rxjs";
import {ObjectComponent} from './object.component';

@Component({
    selector: 'scriptpad-output',
    templateUrl: 'app/templates/output.html',
    styleUrls: ['css/output.css'],
    directives: [ObjectComponent]
})
export class OutputComponent {
    stream: Observable<Object>;
    log: Array<any> = [];
    constructor(private _ngZone: NgZone){ 
        var self = this;
    }
    subscribe(stream){
        var self = this;
        this.stream = stream;
        this.log = [];
        this.stream.subscribe(x => {
            self._ngZone.run(() => {
               self.log.push(x);
            });
        });  
    }
}