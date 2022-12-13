import { Pipe, PipeTransform } from '@angular/core';
import * as routes from '../../constant/route'

@Pipe({
  name: 'absolute'
})
export class AbsolutePipe implements PipeTransform {

  transform(route : any){
    //@ts-ignore
    return routes[route].fullUrl
  }

}
