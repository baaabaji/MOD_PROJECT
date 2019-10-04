import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { MprogressComponent } from './mprogress.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MprogressComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [MprogressComponent]
})
export class AppModule { }
