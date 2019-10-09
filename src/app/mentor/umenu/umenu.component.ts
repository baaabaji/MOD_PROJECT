import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {UmenuService} from './umenu.service';
import {User} from './umenu.model'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyService } from '../../Services/my-service.service';
import { JsonpInterceptor } from '@angular/common/http';
import * as _ from "underscore";


@Component({
	selector: 'umenu',
	templateUrl: './umenu.component.html',
	styleUrls:['./umenu.component.css']

})
export class UmenuComponent implements OnInit {

	myTrainings;
	traninerName;
	CurrentUser; 
	constructor(private myService:MyService,private router:Router) { 
	  if(localStorage.getItem("userId")==undefined)
	  {
		alert("Please login");
		this.router.navigate(['login']);
	  }
	}
  
	ngOnInit() {
	  let i= localStorage.getItem("userId");
	  this.CurrentUser= +i;
	
	  this.getTrainings();
	}
  
	getTrainings()
	{
	  this.myService.trainingApprovals().subscribe(data=>{
		this.myTrainings=_.where(data,{accept:true,userId:this.CurrentUser,PaymentStatus:true});
		console.log(this.myTrainings);
	   // this.getTrainerById();
	  });
	}
  
	getTrainerById()
	{
	  this.myService.GetAll().subscribe(data=>
	  {
		this.traninerName=data;
		console.log(this.traninerName);
	  })
	}
  logout()
	{
		sessionStorage.removeItem('role')
		sessionStorage.removeItem('id')
		sessionStorage.removeItem('username')
		this.router.navigate(['home']);
	}
}