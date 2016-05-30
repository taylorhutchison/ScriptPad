import {Component, Input, OnInit} from "@angular/core";
import {StringTypeComponent} from "./types/string.component";
import {NumberTypeComponent} from "./types/number.component";
import {TypeDetection} from '../services/typedetection.service';

@Component({
    selector:'object-out',
    templateUrl: 'app/templates/object.html',
    directives: [StringTypeComponent, NumberTypeComponent]
})
export class ObjectComponent implements OnInit{
    @Input() objval;
    type:string;
    constructor(private _typeDetection: TypeDetection){}
    ngOnInit(){
        this.type = this._typeDetection.gettype(this.objval);
    }
}