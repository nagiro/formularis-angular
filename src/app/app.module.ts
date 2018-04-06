import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
