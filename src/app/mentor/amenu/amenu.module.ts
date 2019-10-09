import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AmenuComponent } from './amenu.component';
import * as _ from "underscore";
@NgModule({
  declarations: [
    AmenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AmenuComponent]
})
export class AppModule { }
