import { Component } from '@angular/core';
import { Subject, ReplaySubject, scan, reduce, of, map, take } from 'rxjs';

@Component({
  selector: 'rxw-game-score',
  templateUrl: './game-score.component.html',
})
export class GameScoreComponent {

  logStream$ = new ReplaySubject<string | number>();
  score$ = new Subject<number>();

  currentScore = 0;

  constructor() {
    /**
     * Wir entwickeln ein spannendes Browser-Spiel!
     * Jetzt fehlt nur noch der Code, um den aktuellen Punktestand zu ermitteln ...
     */

    /******************************/

    this.score$.pipe(
      scan((acc, item) => acc + item, 0)
    ).subscribe(score => {
      this.currentScore = score;
    });

    // 1 --- 5 ---- 10 ---- 2 --- -5
    // 1 --- 6 ---- 16 ---- 18 --- 13

    // [1,2,3].reduce((acc, item) => acc + item) // 6


    /******************************/

    of(
      'SETCITYLEIPZIG',
      'SETCITYDD',
      'SETNAMEFERDINAND',
      'UNKNOWN',
      'SETNAMEKLAUS',
      'SETNAMEANDREA',
    ).pipe(
      scan((acc, item) => {
        switch (item) {
          case 'SETCITYLEIPZIG': return { ...acc, city: 'Leipzig' };
          case 'SETCITYDD': return { ...acc, city: 'Dresden' };
          case 'SETNAMEFERDINAND': return { ...acc, name: 'Ferdinand' };
          case 'SETNAMEKLAUS': return { ...acc, name: 'Klaus' };
          case 'SETNAMEANDREA': return { ...acc, name: 'Andrea' };
          default: return acc;
        }
      }, { name: 'Andrea' }),
      // map((state: any) => state.city)
    ).subscribe(e => console.log(e))



    /******************************/

    this.score$.subscribe({
      next: e => this.logStream$.next(e),
      complete: () => this.logStream$.next('✅ COMPLETE')
    });
  }

  finishGame() {
    this.score$.complete();
  }

  addScore(amount: number) {
    this.score$.next(amount);
  }

}
