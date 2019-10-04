import { Component,OnInit } from '@angular/core';

import {User,Mentor} from './aman.model';
import{AmanService} from './aman.service';
import{Router} from '@angular/router';

@Component({
	selector: 'aman',
	templateUrl: './aman.component.html',
	styles:[]

})
export class AmanComponent implements OnInit {

	users: User[];
	mentors: Mentor[];
	
	constructor(private router: Router,private amanService: AmanService)
	{

	}

	ngOnInit(){
		this.amanService.getUsers()
		.subscribe(data =>{
			this.users=data;
		});

		this.amanService.getMentors()
		.subscribe(data1=>{
			this.mentors=data1;
		});
	};

	deleteUser(user: User): void{
		this.amanService.deleteUser(user)
		.subscribe(data=> {
			this.users = this.users.filter(u => u !== user);
		})
	};

	deleteMentor(mentor: Mentor): void{
		this.amanService.deleteMentor(mentor)
		.subscribe(data1=>{
			this.mentors=this.mentors.filter(m => m !== mentor);
		})
	};
	
	logout()
	{
		sessionStorage.removeItem('role')
		sessionStorage.removeItem('id')
		sessionStorage.removeItem('username')
		this.router.navigate(['home']);
	}


}