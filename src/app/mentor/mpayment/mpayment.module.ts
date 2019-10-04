import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MpaymentComponent } from './mpayment.component';

@NgModule({
  declarations: [
    MpaymentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MpaymentComponent]
})
export class AppModule { }
