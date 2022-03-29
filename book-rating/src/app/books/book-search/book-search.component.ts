import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  searchControl = new FormControl('');

  constructor() {
    const input$: Observable<string> = this.searchControl.valueChanges;

    input$.subscribe(e => {
      console.log(e);
    })
  }

  ngOnInit(): void {
  }

}
