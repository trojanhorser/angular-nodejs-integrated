import {Component} from 'angular2/core' 
import {VoyageComponent} from '../../voyage/voyage.component'
import {BillOfLadingDetailComponent} from '../details/detail.component'
import {CargoComponent} from '../../cargo/cargo.component'


@Component({
    selector: 'bill-of-lading',
    templateUrl: 'app/billoflading/main/main.component.html',
    directives: [VoyageComponent,BillOfLadingDetailComponent,CargoComponent]
})

export class BillOfLadingComponent{
    
    showVoyagesTab: Boolean = true;
    showBillOfLadingDetailsTab: Boolean = false;
    showCargoDetailsTab: Boolean = false;
    
     tabClicked(tab): void{
        
         if(tab === "voyage"){
            this.showVoyagesTab = true;
            this.showBillOfLadingDetailsTab = false;
            this.showCargoDetailsTab = false; 
         }
         
         if(tab === "billoflading"){
            this.showVoyagesTab = false;
            this.showBillOfLadingDetailsTab = true;
            this.showCargoDetailsTab = false;
         }
         
          if(tab === "cargo"){
            this.showVoyagesTab = false;
            this.showBillOfLadingDetailsTab = false;
            this.showCargoDetailsTab = true;    
         }
    }
    
}