import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MeditComponent } from './medit.component';

@NgModule({
  declarations: [
    MeditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MeditComponent]
})
export class AppModule { }
