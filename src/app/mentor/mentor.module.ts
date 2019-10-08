import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MentorComponent } from './mentor.component';
import { MprogressComponent } from './mprogress/mprogress.component';
import { LoginComponent } from './login/login.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ConfirmMentorComponent } from './confirm-mentor/confirm-mentor.component';
import { CmentorComponent } from './cmentor/cmentor.component';
import { MctrainingComponent } from './mctraining/mctraining.component';
import { ReqtrainingComponent } from './reqtraining/reqtraining.component';
@NgModule({
  declarations: [
    MentorComponent,
    MprogressComponent,
    LoginComponent,
    ConfirmMentorComponent,
    CmentorComponent,
    MctrainingComponent,
    ReqtrainingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MentorComponent]
})
export class AppModule { }
