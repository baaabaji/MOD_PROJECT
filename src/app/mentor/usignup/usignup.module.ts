import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UsignupComponent } from './usignup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [UsignupComponent]
})
export class AppModule { }
