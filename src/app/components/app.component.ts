import {Component, ViewChild} from '@angular/core';
import {MenuComponent} from './menu.component';
import {LayersComponent} from './layers.component';
import {InputComponent} from './input.component';
import {OutputComponent} from './output.component';
import {Observable} from 'Rxjs';
import {TypeDetection} from '../services/typedetection.service';
import {GrabBarComponent} from "./grabbar.component";
import {SettingsService} from "../services/settings.service";

@Component({
  selector: 'scriptpad',
  templateUrl:'app/templates/app.html',
  directives: [GrabBarComponent, MenuComponent, LayersComponent, InputComponent, OutputComponent],
  providers: [TypeDetection, SettingsService]
})
export class AppComponent { 
  @ViewChild(InputComponent) inputComponent: InputComponent;
  @ViewChild(OutputComponent) outputComponent: OutputComponent;
  settings: any;
  constructor(private _settings: SettingsService){
    this.settings = _settings.getSettings();
  }
  runcommand(event){
    var self = this;
    switch(event.name){
      case "runscript":
          this.inputComponent.executeScript()
            .then(function(worker){
            var stream = Observable.create(observer => {
                worker.onmessage = function(e){
                  observer.next(e.data);
                }
            });
           self.outputComponent.subscribe(stream);
        });
      break;
      default:
        console.log("Unknown command issued: "+event.name);
      break;
    }
  }
}