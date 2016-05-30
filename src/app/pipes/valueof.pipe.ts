import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'valueof'})
export class ValueOf implements PipeTransform {
  transform(value: any): string {
      return value.valueOf();
  }
}