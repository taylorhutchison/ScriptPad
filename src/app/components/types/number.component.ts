import {Component, Input} from '@angular/core';

@Component({
    selector:'number-type',
    templateUrl: 'app/templates/types/number.html'
})
export class NumberTypeComponent {
    @Input() value: number;
}