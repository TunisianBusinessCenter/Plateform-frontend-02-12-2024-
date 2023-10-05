import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'materiaux'
})
export class MateriauxPipe implements PipeTransform {

  transform(items: any[], term: string[]): any[] {

    return items = items.filter(a => {
      return term.length ? term.indexOf(a.name) != -1 : items;

    })   

  }

}
