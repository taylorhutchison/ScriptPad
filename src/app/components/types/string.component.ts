import {Component, Input} from '@angular/core';

@Component({
    selector:'string-type',
    templateUrl: 'app/templates/types/string.html'
})
export class StringTypeComponent {
    @Input() value: string;
}