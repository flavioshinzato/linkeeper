import { Pipe, PipeTransform } from '@angular/core';
import { LinkModel } from '../model/link.model';

@Pipe({
  name: 'linkSearch'
})
export class LinkSearchPipe implements PipeTransform {

  transform(linksList: LinkModel[], searchText: string): LinkModel[] {
    if(searchText == undefined || searchText == "") {
      return linksList;
    }

    var filteredList: LinkModel[] = [];
    for(let link of linksList) {
      if(link.title.toLowerCase().includes(searchText.toLowerCase()) || link.category.toLowerCase().includes(searchText.toLowerCase())) {
        filteredList.push(link)
      }
    }

    return filteredList;
  }

}
