import { Component, OnInit } from '@angular/core';

import {Tech} from './atech.model';
import {AtechService} from './atech.service';
import {Router} from '@angular/router';



@Component({
	selector: 'atech',
	templateUrl: './atech.component.html',
	styles:[]

})
export class AtechComponent implements OnInit{

	trainings: Tech[];
	newT: Tech = new Tech();

	constructor(private router: Router, private atechService: AtechService){

	}
	ngOnInit(){
		this.atechService.getTrainings()
		.subscribe(data =>{
			this.trainings=data;
		});
	};
	

	deleteTech(tech: Tech): void {
		this.atechService.deleteTech(tech)
		  .subscribe( data => {
			this.trainings = this.trainings.filter(u => u !== tech);
		  })
	  };

	  createTech(): void {
		this.atechService.createTech(this.newT)
			.subscribe( data => {
			  alert("Tech created successfully.");
			});
	
	  };


	  logout()
	{
		sessionStorage.removeItem('id')
		sessionStorage.removeItem('role')
		sessionStorage.removeItem('username')
		this.router.navigate(['home']);
	}
	
	




	
}