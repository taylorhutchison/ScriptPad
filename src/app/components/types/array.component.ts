import {Component, Input} from '@angular/core';
import {TypeDetection} from '../../services/typedetection.service';

@Component({
    selector:'array-type',
    templateUrl: 'app/templates/types/array.html'
})
export class ArrayTypeComponent {
    @Input() value: Array<any>;
    constructor(private _typeDetection: TypeDetection){
        
    }
}