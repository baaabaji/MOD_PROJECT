import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as _ from "underscore";
import { MyService } from '../../Services/my-service.service';
import { CtrainingComponent } from './ctraining.component';

@NgModule({
  declarations: [
    CtrainingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CtrainingComponent]
})
export class AppModule { }
