import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AmanComponent } from './aman.component';
import { MyService } from 'src/app/Services/my-service.service';
@NgModule({
  declarations: [
    AmanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AmanComponent]
})
export class AppModule { }
