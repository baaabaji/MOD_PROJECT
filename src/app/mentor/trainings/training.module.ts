import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TrainingComponent } from './training.component';

@NgModule({
  declarations: [
    TrainingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TrainingComponent]
})
export class AppModule { }
