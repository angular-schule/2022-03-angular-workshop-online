import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  bookForm: FormGroup;

  constructor() {
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
      price: new FormControl(0, Validators.min(0)),
    });
  }

  ngOnInit(): void {
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
