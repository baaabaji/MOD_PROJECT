import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from "underscore";


import {MmenuService} from './mmenu.service';
import {Mentor} from './mmenu.model'
import { MyService } from 'src/app/Services/my-service.service';



@Component({
	selector: 'mmenu',
	templateUrl: './mmenu.component.html',
	styleUrls: ['./mmenu.component.css']

})
export class MmenuComponent implements OnInit {

	myTrainings;
  Data:boolean=true;
  Progress;
  msg;
  getId;
  CurrentUser;
  constructor(private myService:MyService,private router:Router) {
    if(localStorage.getItem("mentorid")==undefined)
    {
      alert("Please login");
      this.router.navigate(['login']);
    } 
  }
NewUser;
  ngOnInit() {
    let i= localStorage.getItem("mentorid");
    this.NewUser= +i;
	this.getTrainings();
	console.log("Current User"+this.NewUser);
  }


  getTrainings()
  {
    this.myService.trainingApprovals().subscribe(data=>{
      this.myTrainings=_.where(data,{accept:true,mentorId:this.NewUser,PaymentStatus:true});
      // console.log(this.myTrainings);
    //  console.log(Object.keys(this.myTrainings).length);
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

  Update(id)
  { 
    this.getId=id;
  }

  Mainupdate()
  {
    let data={
      id:this.getId,
      progress:this.Progress
    };
  if(this.Progress<=100)
  {
    this.myService.trainingProgress(data).subscribe(data=>{
      this.msg=data;
      alert(this.msg);
      this.Progress='';
      this.getTrainings();
    });
  }
  else
  {
    alert("Cannot be greater then 100");
    this.Progress="";
  }
 
  }

	logout()
	{
		localStorage.clear();
		this.router.navigate(['home']);
	}
	}
	