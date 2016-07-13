import {PipeTransform, Pipe} from 'angular2/core'

@Pipe({
  name: 'cargoFilter'  
})

export class CargoFilterPipe implements PipeTransform {
    transform(value: any[], args: string[]): any[]{
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
           
        return filter ? value.filter((cargo: any) => 
                cargo.package.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
} 