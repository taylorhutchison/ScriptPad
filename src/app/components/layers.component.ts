import {Component} from "@angular/core";

@Component({
    selector: 'scriptpad-layers',
    templateUrl: 'app/templates/layers.html'
})
export class LayersComponent {
    mode:string = "Expand";
    expanded:boolean = false;
    layers = [];
    expandToggle(){
        this.expanded = !this.expanded;
        this.mode = this.expanded ? "Collapse" : "Expand";
    }
    getClass(){
        return this.expanded ? "expanded" : "collapsed";
    }
    addLayer(){
        this.layers.push(1);
    }
}