import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { FormulariGeneralComponent } from './forms/general/formulari-general.component';
import { AppComponent } from './app.component';
import { FormsModule } from './forms/forms.module';
import { FormPartsModule } from './form-parts/form-parts.module';
import { SharedObjectService } from './objects/shared-object/shared-object.service';

const appRoutes: Routes = [
  { path: 'formulari/:id', component: FormulariGeneralComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( appRoutes, { enableTracing: false, useHash: true } ),
    MatStepperModule,
    BrowserAnimationsModule,
    FormPartsModule,

  ],
  providers: [SharedObjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
