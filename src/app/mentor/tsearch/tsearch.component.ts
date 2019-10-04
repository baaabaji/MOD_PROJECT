import { Component, OnInit } from '@angular/core';

import {Tech} from './tsearch.model';
import { TsearchService } from './tsearch.service';
import { Router } from '@angular/router';
import {Training} from './tsearch.model';

@Component({
	selector: 'tsearch',
	templateUrl: './tsearch.component.html',
	styles: []

})
export class TsearchComponent implements OnInit {

	user=sessionStorage.getItem('username')
	showId=sessionStorage.getItem('showId');

	trainings: Tech[];

	constructor(private router: Router, private tsearchService: TsearchService){

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

	enroll(trainid)
	{
		this.tsearchService.enroll(trainid).
		subscribe(data=> {

		});
		
	};
	



}