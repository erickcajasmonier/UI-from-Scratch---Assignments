import { Component, OnInit } from '@angular/core';
import { UtilService } from './../services/util.service';
import { Books } from './shared/books.model';
import { BooksService } from './shared/books.service';


@Component({
	selector: 'books',
	templateUrl: 'books.component.html',
	styleUrls: ['./books.component.scss'],
	providers: [BooksService],
})

export class BooksComponent implements OnInit {
	books: Books[] = [];
	filters: any = { pageSize: "100", pageNumber: 1, sortBy: null, filterText: '' };
 	sortFields: Array<string> = [
    'year_published',
    'title',
    'rating'
  ];
	constructor(private booksService: BooksService,  private utilService: UtilService) { }

	ngOnInit() {
		this.UpdateList();
	}
	UpdateList() {
		this.booksService.getList(this.filters).subscribe((res) => {
			this.books = res;
		});
	}

}
