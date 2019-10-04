import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MentorComponent } from './mentor.component';
import { MprogressComponent } from './mprogress/mprogress.component';
import { LoginComponent } from './login/login.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    MentorComponent,
    MprogressComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MentorComponent]
})
export class AppModule { }
