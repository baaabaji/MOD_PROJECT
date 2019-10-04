import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {UmenuService} from './umenu.service';
import {User} from './umenu.model'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyService } from '../../Services/my-service.service';
import { JsonpInterceptor } from '@angular/common/http';


@Component({
	selector: 'umenu',
	templateUrl: './umenu.component.html',
	styleUrls:['./umenu.component.css']

})
export class UmenuComponent implements OnInit {

	users: User=new User();
	user=sessionStorage.getItem('Email')

	constructor(private fb: FormBuilder, private mylog: MyService, private router: Router)
	{
		User;
		Data:Object;
	}

ngOnInit(){
		this.mylog.GetAll()
		.subscribe(data=>{
			// this.users=data;
		});

	}

	logout()
	{
		sessionStorage.removeItem('id')
		sessionStorage.removeItem('role')
		sessionStorage.removeItem('username')
		this.router.navigate(['home']);
	}
	
}