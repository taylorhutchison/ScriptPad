import {Injectable} from "@angular/core";
import {Observable} from "Rxjs";
@Injectable()
export class Log {
    data: Array<any> = [];
    add(obj: any){
        console.log("pushing onto the log");
        this.data.push(obj);
    }
    clear(){
        this.data = [];
    }
}