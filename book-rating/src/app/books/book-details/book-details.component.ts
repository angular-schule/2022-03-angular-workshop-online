import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book?: Book;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) {
    // Synchroner Weg / PULL
    // const isbn = this.route.snapshot.paramMap.get('isbn'); // books/:isbn

    // Asynchroner Weg / PUSH
    // TODO: Verschachtelte Subscriptions vermeiden
    this.route.paramMap.subscribe(params => {
      const isbn = params.get('isbn')!; // Non-Null Assertion
      console.log(isbn);

      this.bs.getSingle(isbn).subscribe(book => {
        this.book = book;
      });
    });


    /* AUFGABE
    - HTTP-Request starten => Buch abrufen
    - Buch anzeigen (ganz simpel, z.B. Titel und Description)
    */
  }

  ngOnInit(): void {
  }

}
