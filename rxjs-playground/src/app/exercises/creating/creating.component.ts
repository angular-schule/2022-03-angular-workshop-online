import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter, take } from 'rxjs';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/


    // of('A', 'B', 'C')
    // from([12, 34, 56, 67])
    // timer(3000) // ---------------0|
    // timer(1000, 500) // ----------0-----1-----2-----3 ...
    // interval(500) // -----0-----1-----2-----3-----4 ...

    const myObs2$ = interval(500).pipe(
      map(e => e * 3),
      filter(e => e % 2 === 0),
      take(10)
    );

    myObs2$.subscribe({
      next: e => this.log(e),
      complete: () => this.log('COMPLETE')
    });


    /******************************/

    function producer(sub: any) {
      const result = Math.random();
      sub.next(result);

      sub.next(2);
      sub.next(3);


      setTimeout(() => {
        sub.next(5);
        sub.error('FEHLER!');
      }, 2000)
    }


    const obs = {
      next: (e: any) => console.log(e),
      error: (err: any) => console.error(err),
      complete: () => console.log('Complete')
    };

    // producer(obs);

    const myObs$ = new Observable(producer);
    // myObs$.subscribe(obs);


    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
