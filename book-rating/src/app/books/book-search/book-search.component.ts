import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, map, Observable, switchMap } from 'rxjs';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  searchControl = new FormControl('');

  result$: Observable<Book[]>;

  constructor(private bs: BookStoreService) {
    const input$: Observable<string> = this.searchControl.valueChanges;

    this.result$ = input$.pipe(
      debounceTime(300),
      filter(term => term.length >= 3),
      switchMap(term => this.bs.search(term))
    );
  }

  ngOnInit(): void {
  }

}
