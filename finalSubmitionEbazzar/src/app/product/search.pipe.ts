import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(obj: any, term: any): any {
    if (term === undefined) {
      return obj;
    }
    return obj.filter((object) => {
      const x = JSON.stringify(object);
      return x.toLowerCase().includes(term.toLowerCase());
    });
  }
}
