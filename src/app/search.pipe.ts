import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(player:any[],searchTerm:string):any[]{
    if(!player||!searchTerm)
       return player;
    return player.filter(plyr=>plyr.name.to_lowerCase().indexOf(searchTerm.toLowerCase())!==-1)
  }
}
