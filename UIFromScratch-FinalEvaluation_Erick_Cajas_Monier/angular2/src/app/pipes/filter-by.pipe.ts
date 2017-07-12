import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(books: any, filterText: any): any {
        if (filterText === undefined) return books;
        return books.filter(function(book){
            return book.title.toLowerCase().includes(filterText.toLowerCase());
        })
  }
}