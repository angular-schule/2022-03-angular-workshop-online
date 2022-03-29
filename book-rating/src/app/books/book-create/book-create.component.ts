import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private bs: BookStoreService, private router: Router) {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]),
      title: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl(''),
      rating: new FormControl(1, [
        Validators.min(1),
        Validators.max(5),
      ]),
      price: new FormControl(0, Validators.min(0))
    });
  }

  ngOnInit(): void {
  }

  submitForm() {

    const newBook: Book = {
      ...this.bookForm.value,
      firstThumbnailUrl: ''
    };

    // TODO: Buch zum Server schicken
    this.bs.create(newBook).subscribe(receivedBook => {
      this.router.navigate(['/books', receivedBook.isbn]);
      // this.router.navigateByUrl('/books');
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.bookForm.get(controlName);
    return !!control && control.touched && control.invalid;
    // Alternative: return !!(control?.touched && control?.invalid);
  }

  hasError(controlName: string, errorCode: string): boolean {
    const control = this.bookForm.get(controlName);
    return !!control && control.touched && control.hasError(errorCode);
  }

}


/*
TODO:
- Validierung / Rating begrenzen
- Feedback-Text
- Submit-Button
- Abschicken
- HTTP / bs.create()
- danach:
  - Formular Reset
  - wegnavigieren
*/
