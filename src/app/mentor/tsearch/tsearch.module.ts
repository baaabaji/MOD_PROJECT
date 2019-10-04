import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TsearchComponent } from './tsearch.component';

@NgModule({
  declarations: [
    TsearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TsearchComponent]
})
export class AppModule { }
