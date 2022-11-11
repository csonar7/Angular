import {Component,
    Input,Output,
    EventEmitter} from "@angular/core"
@Component({
    selector: "grid-ui",
    templateUrl:"./CustomerApp.Grid.html"
})
    
export class GridComponent{
    //all the logic the code behind the grid
    //grid for columns
    gridColumns: Array<any> = new Array<any>;
    //grid for data
    gridData: Array<any> = new Array<any>;

    @Input("grid-columns")
    set setGridColumns(_gridColumn: Array<any>){
        this.gridColumns= _gridColumn;

    }
    @Input("grid-data")
    set setGridData(_gridData: Array<any>){
        this.gridData= _gridData;
    }

    @Output("grid-Selected")
    eventEmitter:EventEmitter<any> = new EventEmitter<any>();
    SelectGrid(_selected: any){
        this.eventEmitter.emit(_selected);
    }
}