import {Component} from 'angular2/core' 

@Component({
    selector: 'bill-of-lading-detail',
    templateUrl: 'app/billoflading/details/detail.component.html'
})

export class BillOfLadingDetailComponent{
     
     billOfLadingNumber2: Number;
     masterBillOfLadingNumber: Number;
     billOfLadingNumberImport: Number;
     warfCode: Number;
     originPort: String;
     destination: String; 
     loadingPort: String; 
     discharge: String; 
     consigneePort: String; 
     shipper: String; 
     notify: String;
     
     showMaximizeIcon1: Boolean = false;
     showCalapseIcon: Boolean = true;
     showWidgetBody: Boolean = true;
     
     onMinimizeClicked(event): void{
        this.showMaximizeIcon1 = !this.showMaximizeIcon1;
        this.showCalapseIcon = !this.showCalapseIcon;
        this.showWidgetBody = !this.showWidgetBody;
    }
}