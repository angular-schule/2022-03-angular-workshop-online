import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'create', component: BookCreateComponent },
  { path: 'search', component: BookSearchComponent },
  { path: ':isbn', component: BookDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
