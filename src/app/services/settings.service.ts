import {Injectable} from "@angular/core";

@Injectable()
export class SettingsService {
    private settings: any = {
            resizablePanes: false
    }
    getSettings = () => {return this.settings} 
}