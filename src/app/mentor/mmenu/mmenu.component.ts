import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import {MmenuService} from './mmenu.service';
import {Mentor} from './mmenu.model'



@Component({
	selector: 'mmenu',
	templateUrl: './mmenu.component.html',
	styleUrls: ['./mmenu.component.css']

})
export class MmenuComponent implements OnInit {

	mentor: Mentor=new Mentor();
	user=sessionStorage.getItem('username')

	constructor(private router: Router, private mmenuService: MmenuService)
	{

	}
	ngOnInit(){
		this.mmenuService.getMentor()
		.subscribe(data=>{
			this.mentor=data;
		});

	}

	logout()
	{
		sessionStorage.removeItem('role')
		sessionStorage.removeItem('id')
		sessionStorage.removeItem('username')
		this.router.navigate(['home']);
	}
	
	
}