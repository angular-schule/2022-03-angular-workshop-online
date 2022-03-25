import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

import { DashboardComponent } from './dashboard.component';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let book: Book;

  beforeEach(async () => {
    // Testbuch
    book = {
      isbn: '',
      title: '',
      description: '',
      price: 44,
      rating: 5
    };

    const ratingMock: BookRatingService = {
      rateUp: b => b,
      rateDown: b => b
    };

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      schemas: [NO_ERRORS_SCHEMA], // Shallow Component Test
      providers: [
        // BRS ersetzen: Immer wenn BookRatingService angefordert wird,
        // wird stattdessen ratingMock ausgeliefert
        {
          provide: BookRatingService,
          useValue: ratingMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service for doRateUp()', () => {
    // Arrange
    // Service anfordern. Tatsächlich kommt hier der ratingMock raus, weil der Provider das so festlegt
    const service = TestBed.inject(BookRatingService);

    // service überwachen. Originale Methode rateUp soll aber trotzdem verwendet werden!
    spyOn(service, 'rateUp').and.callThrough();

    // Act
    component.doRateUp(book);


    // Assert
    expect(service.rateUp).toHaveBeenCalledTimes(1);
    expect(service.rateUp).toHaveBeenCalledWith(book);
  });
});
