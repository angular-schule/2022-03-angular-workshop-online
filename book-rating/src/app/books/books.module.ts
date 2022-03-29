import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookDetailsComponent,
    BookSearchComponent,
    BookCreateComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
