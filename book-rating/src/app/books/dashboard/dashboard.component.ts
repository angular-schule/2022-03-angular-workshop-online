import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private rs: BookRatingService) {
    this.books = [
      {
        isbn: '123',
        title: 'Angular',
        description: 'Grundlagen und mehr',
        price: 36.9,
        rating: 5
      },
      {
        isbn: '456',
        title: 'Vue.js',
        description: 'Das grüne Framework',
        price: 32.9,
        rating: 3
      },
    ];
  }

  ngOnInit(): void {
  }

  doRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  private updateList(ratedBook: Book) {
    this.books = this.books.map(b => {
      if (b.isbn === ratedBook.isbn) {
        return ratedBook;
      } else {
        return b;
      }
    });


    // this.books = this.books.map(b => b.isbn === ratedBook.isbn ? ratedBook : b);

    // [1,2,3].map(e => e * 10); // [10,20,30]
    // [1,2,3,4,5,6,7,8,9,10].filter(e => e > 5); // [6,7,8,9,10]
  }

  trackBook(index: number, book: Book) {
    return book.isbn;
  }

}


/*

class BookC {
  rating: number = 5;
  constructor(public isbn: string, public title: string) {}

  rateUp() {
    this.rating++;
  }
}

const myBook = new BookC('123', 'Angular');
myBook.rateUp();

////////

interface BookI {
  isbn: string;
  title: string;
  rating: number;
}


const myBook2: BookI = {
  isbn: '1234',
  title: 'Angular',
  rating: 5
};


const myDTO = {
  "isbn": "1234",
  "title": "Angular",
  "rating": 5
}



const b1 = new BookC(myDTO.isbn, myDTO.title)


const b2 = {
  ...myDTO,
  titlex: myDTO.title
}


function rateUp(book: BookI): BookI {
  book.rating++;
  return book;
}




*/
