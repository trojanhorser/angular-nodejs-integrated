import {Component} from 'angular2/core' 

@Component({
    selector: 'voyage',
    templateUrl: 'app/voyage/voyage.component.html'
})

export class VoyageComponent{
    
    showVoyageHeader: Boolean = true;
    showVoyageCalapseIcon: Boolean = true;
    showVoyageMaximizeIcon: Boolean = false;
    
    
    onMinimizeClicked(event): void{
        this.showVoyageCalapseIcon =  !this.showVoyageCalapseIcon;
        this.showVoyageMaximizeIcon =  !this.showVoyageMaximizeIcon;
    }
}