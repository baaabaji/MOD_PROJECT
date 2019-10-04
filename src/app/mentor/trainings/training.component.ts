import { Component, OnInit } from '@angular/core';

import {Tech} from './training.model';
import { TrainingService } from './training.service';
import { Router } from '@angular/router';

@Component({
	selector: 'training',
	templateUrl: './training.component.html',
	styles: []

})
export class TrainingComponent implements OnInit {

	user=sessionStorage.getItem('username')

	trainings: Tech[];

	constructor(private router: Router, private tsearchService: TrainingService){

	}

	ngOnInit() {
		this.tsearchService.getTrainings()
		.subscribe(data => {
			this.trainings=data;
		});
	};
	
	
	logout()
	{
		sessionStorage.removeItem('role')
		sessionStorage.removeItem('id')
		sessionStorage.removeItem('username')
		this.router.navigate(['home']);
	}
	



}