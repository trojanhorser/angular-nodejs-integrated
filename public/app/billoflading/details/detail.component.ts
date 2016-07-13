import {Component} from 'angular2/core' 

@Component({
    selector: 'bill-of-lading-detail',
    templateUrl: 'app/billoflading/details/detail.component.html'
})

export class BillOfLadingDetailComponent{
     
     billOfLadingNumber: Number;
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
     
     showMaximizeIcon: Boolean = false;
     showCalapseIcon: Boolean = true;
     showWidgetBody: Boolean = true;
     
     onMinimizeClicked(event): void{
        this.showMaximizeIcon = !this.showMaximizeIcon;
        this.showCalapseIcon = !this.showCalapseIcon;
        this.showWidgetBody = !this.showWidgetBody;
    }
}