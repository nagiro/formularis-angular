import { Test, Formulari, DadesBroma, Pantalla } from './objects/formulari';
import { Component, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { FormGroup } from '@angular/forms';
import { SharedObjectService } from './objects/shared-object/shared-object.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  FG: FormGroup[] = [];

  F = new Formulari();

  constructor(private _ss: SharedObjectService) {
    // Quan carrego l'aplicació, sempre carrego el formulari que toca i el guardo en un shared Service
    const T = new DadesBroma();
    this.F = new Formulari( JSON.parse( T.e ));
    this._ss.changeFormulari( this.F );
  }

}
