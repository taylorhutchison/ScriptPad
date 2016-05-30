import {Injectable} from "@angular/core";

@Injectable()
export class Themer {
    themeList = [
        {name:'light', title: 'Light Theme'},
        {name:'dark',title:'Dark Theme'}
    ];
    getThemes() { return this.themeList; }
}