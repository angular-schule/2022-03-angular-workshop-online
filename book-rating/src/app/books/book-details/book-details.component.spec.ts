import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';

import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async () => {

    const storeMock: Partial<BookStoreService> = {
      getAll: () => of([])
    };

    await TestBed.configureTestingModule({
      declarations: [ BookDetailsComponent ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: BookStoreService, useValue: storeMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
