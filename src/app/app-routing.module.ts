import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsignupComponent } from './mentor/msignup/msignup.component';
import { HomeComponent } from './mentor/home/home.component';
import { MentorComponent } from './mentor/mentor.component';
import { MmenuComponent } from './mentor/mmenu/mmenu.component';
import { MprofileComponent } from './mentor/mprofile/mprofile.component';
import { MprogressComponent } from './mentor/mprogress/mprogress.component';
import { MeditComponent } from './mentor/medit/medit.component';
import { TsearchComponent } from './mentor/tsearch/tsearch.component';
import { AmenuComponent } from './mentor/amenu/amenu.component';
import { CtrainingComponent } from './mentor/ctraining/ctraining.component';
import { MpaymentComponent } from './mentor/mpayment/mpayment.component';
import { UpaymentComponent } from './mentor/upayment/upayment.component';
import { UmenuComponent } from './mentor/umenu/umenu.component';
import { UsignupComponent } from './mentor/usignup/usignup.component';
import {UprogressComponent} from './mentor/uprogress/uprogress.component';
import { AfeeComponent } from './mentor/afee/afee.component';
import { AtechComponent } from './mentor/atech/atech.component';
import { AmanComponent } from './mentor/aman/aman.component';
import { TrainingComponent } from './mentor/trainings/training.component';
import { LoginComponent } from './mentor/login/login.component';
import { CmentorComponent } from './mentor/cmentor/cmentor.component';
import { MctrainingComponent } from './mentor/mctraining/mctraining.component';
import { ReqtrainingComponent } from './mentor/reqtraining/reqtraining.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'msignup', component: MsignupComponent},
  { path: 'training', component: TrainingComponent},
  { path: 'home', component: HomeComponent}, 
  { path: 'aman', component: AmanComponent},
  { path: 'atech', component: AtechComponent},
  { path: 'afee', component: AfeeComponent},
  { path: 'usignup', component: UsignupComponent},
   { path: 'umenu', component: UmenuComponent },
   { path: 'mpayment', component: MpaymentComponent },
   { path: 'upayment', component: UpaymentComponent },
   { path:'login', component: LoginComponent},
   { path:'medit', component: MeditComponent},
   { path:'ctraining', component: CtrainingComponent},
   { path:'mprofile', component: MprofileComponent},
   { path:'mprogress', component: MprogressComponent},
   { path:'uprogress', component: UprogressComponent},
   { path:'tsearch', component: TsearchComponent},
   { path:'mmenu', component: MmenuComponent},
   { path:'amenu', component: AmenuComponent},
   { path:'mctraining', component: MctrainingComponent},
   { path:'reqtraining', component: ReqtrainingComponent},
   { path:'cmentor', component:CmentorComponent}

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
