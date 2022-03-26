import { Injectable } from '@angular/core';
import { merge, timer, Observable, map, scan } from 'rxjs';

import { ExerciseService } from '../exercise.service';

@Injectable({
  providedIn: 'root'
})
export class MeasureValuesService {

  constructor(private es: ExerciseService) {}

  private randomNumber() {
    return Math.random() * 4 - 2;
  }

  getValues(): Observable<number> {
    return merge(
      timer(0, this.es.generateRandomInt(3800, 5000)).pipe(map(() => this.randomNumber())),
      timer(this.es.generateRandomInt(800, 2000), this.es.generateRandomInt(3800, 4500)).pipe(map(() => this.randomNumber())),
      timer(this.es.generateRandomInt(1500, 3500), 7300).pipe(map(() => this.randomNumber()))
    ).pipe(scan((acc, item) => acc + item, 50 + Math.random()));
  }
}
