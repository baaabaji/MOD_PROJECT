import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AloginComponent } from './alogin.component';

@NgModule({
  declarations: [
    AloginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AloginComponent]
})
export class AppModule { }
