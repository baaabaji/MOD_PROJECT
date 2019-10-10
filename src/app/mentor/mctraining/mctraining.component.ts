import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from "underscore";

import { MyService } from 'src/app/Services/my-service.service';

@Component({
  selector: 'app-mctraining',
  templateUrl: './mctraining.component.html',
  styleUrls: ['./mctraining.component.css']
})
export class MctrainingComponent implements OnInit {

  myTrainings;
  Data:boolean=true;
  CurrentUser;
  constructor(private myService:MyService,private router:Router) {
    if(localStorage.getItem("mentorid")==undefined)
    {
      alert("Please login");
      this.router.navigate(['login']);
    }
   }

  ngOnInit() {
    let i= localStorage.getItem("mentorid");
    this.CurrentUser= +i;
    this.getTrainings();
  }


  getTrainings()
  {
    this.myService.trainingApprovals().subscribe(data=>{
      this.myTrainings=_.where(data,{accept:true,mentorId:this.CurrentUser,PaymentStatus:true});
      console.log(this.myTrainings);
     console.log(Object.keys(this.myTrainings).length);
     if(Object.keys(this.myTrainings).length>0)
     {
       this.Data=false;
     }
     else
     {
       this.Data=true;
     }
    });
  }
  logout()
	{
		localStorage.clear();
		this.router.navigate(['home']);
	}
}
