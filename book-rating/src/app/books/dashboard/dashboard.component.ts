import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor() {
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
