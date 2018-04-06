import { Test, Formulari, DadesBroma } from './objects/formulari';
import { Component, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  FG: FormGroup[] = [];
  @ViewChild('stepper') stepper: MatStepper;



  F = new Formulari();

  constructor() {
    const T = new DadesBroma();
    this.F = new Formulari( JSON.parse( T.e ));
  }
}
