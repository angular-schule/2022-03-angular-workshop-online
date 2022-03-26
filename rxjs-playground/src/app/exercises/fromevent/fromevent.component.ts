import { Component } from '@angular/core';
import { fromEvent, map, startWith, debounceTime, fromEventPattern } from 'rxjs';

type ResizeEventType = {
  currentTarget: Window
}

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html',
})
export class FromeventComponent {

  currentWidth = 0;

  constructor() {

    /**
     * Schreibe die jeweils aktuelle Fensterbreite in das Property `this.currentWidth`
     *
     * Nutze fromEvent, um das resize-Event auf window zu abonnieren.
     * Initialisiere das Observable mit der aktuellen Fensterbreite (`window.innerWidth`)
     * Entprelle den Eventstrom, damit nicht zu viele Events gefeuert werden.
     */

    /******************************/

    fromEvent<ResizeEventType>(window, 'resize').subscribe(e => console.log(e));

    /******************************/
  }

}
