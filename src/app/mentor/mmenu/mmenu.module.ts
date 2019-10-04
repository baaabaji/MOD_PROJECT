import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MmenuComponent } from './mmenu.component';

@NgModule({
  declarations: [
    MmenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MmenuComponent]
})
export class AppModule { }
