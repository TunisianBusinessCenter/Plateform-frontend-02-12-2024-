import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(items: any[], term: string): any[] {
   
    return items = items?.filter(a => {
      return term ? a.name.toUpperCase().indexOf(term.toUpperCase()) != -1 
      || a.description.toUpperCase().indexOf(term.toUpperCase()) != -1
      : items;
    })   
  
  }


}
