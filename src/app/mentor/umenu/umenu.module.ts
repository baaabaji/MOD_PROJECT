import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { UmenuComponent } from './umenu.component';

@NgModule({
  declarations: [
    UmenuComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [UmenuComponent]
})
export class AppModule { }
