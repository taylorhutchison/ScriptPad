import {Injectable} from "@angular/core";

@Injectable()
export class TypeDetection {
    gettype(obj){
        var typename = Object.prototype.toString.call(obj);
        switch(typename){
            case '[object Object]':
                return 'object';
            case '[object String]':
                return 'string';
            case '[object RegExp]':
                return 'regex';
            case '[object Array]':
                return 'array';
            case '[object Number]':
                return 'number';
            default:
                return 'unknown';
        }
    }
}