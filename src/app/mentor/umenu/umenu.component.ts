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
	tName;
	CurrentUser;

	constructor(private fb: FormBuilder, private mylog: MyService, private router: Router)
	{
		User;
		// Data:Object;

	}

ngOnInit(){
		this.mylog.GetAll()
		.subscribe(data=>{
			// this.users=data;
			let i= localStorage.getItem("Email");
    this.CurrentUser= +i;
    this.getTrainings();
		});

	}

	getTrainings()
  {
    this.mylog.trainingApprovals().subscribe(data=>{
      this.myTrainings=_.where(data,{accept:true,userId:this.CurrentUser,PaymentStatus:true});
      console.log(this.myTrainings);
     // this.getTrainerById();
    });
  }

  getTrainerById()
  {
    this.mylog.GetAll().subscribe(data=>
    {
      this.tName=data;
      console.log(this.tName);
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