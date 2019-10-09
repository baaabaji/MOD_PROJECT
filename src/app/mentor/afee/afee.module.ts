import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as _ from "underscore";
import { AfeeComponent } from './afee.component';

@NgModule({
  declarations: [
    AfeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AfeeComponent]
})
export class AppModule { }
