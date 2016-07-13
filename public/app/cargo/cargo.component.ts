import {Component} from 'angular2/core' 
import {CargoFilterPipe} from './cargo-filter.pipe'

@Component({
    selector: 'cargo',
    templateUrl: 'app/cargo/cargo.component.html',
    pipes: [CargoFilterPipe]
})

export class CargoComponent{
   
    listFilter: string;
   
    cargos: any = [{
            "index":0,
            "quantity": 500,
            "package": "Lumber",
            "commodity": "Something",
            "hsCode": "10021",
            "weight": [
                200,
                300,
                400
            ],
            "volume": [
                500,
                1000,
                3000
            ],
            "showDetails": false
            },
            {
            "index":1,
            "quantity": 500,
            "package": "New York",
            "commodity": "NY",
            "hsCode": "10021",
            "weight": [
                200,
                300,
                400
            ],
            "volume": [
                500,
                1000,
                3000
            ],
            "showDetails": false
            }];
            
            tempObject: any;
            
            toggleDetails(index) :void{
              this.cargos[index].showDetails = !this.cargos[index].showDetails;
            }
    
}