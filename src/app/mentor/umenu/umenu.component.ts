import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {UmenuService} from './umenu.service';
import {User} from './umenu.model'



@Component({
	selector: 'umenu',
	templateUrl: './umenu.component.html',
	styleUrls:['./umenu.component.css']

})
export class UmenuComponent implements OnInit {

	users: User=new User();
	user=sessionStorage.getItem('username')

	constructor(private router: Router, private umenuService: UmenuService)
	{

	}

ngOnInit(){
		this.umenuService.getUser()
		.subscribe(data=>{
			this.users=data;
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