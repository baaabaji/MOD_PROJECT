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
  Data;
  Progress;
  msg;
  getId;
  CurrentUser;

	constructor(private router: Router, private mylog: MyService)
	{

	}

	logout()
	{
		sessionStorage.removeItem('role')
		sessionStorage.removeItem('id')
		sessionStorage.removeItem('username')
		this.router.navigate(['home']);
	}
	ngOnInit() {
		let i= localStorage.getItem("Id");
		this.CurrentUser= +i;
		this.getTrainings();
	  }
	
	
	  getTrainings()
	  {
		this.mylog.trainingApprovals().subscribe(data=>{
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
	
	  this.mylog.trainingProgress(data).subscribe(data=>{
		this.msg=data;
		alert(this.msg);
		this.Progress='';
		this.getTrainings();
	  });
	  }
	}
	