import { Component,OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

import {Training} from './uprogress.model'
import { Router } from '@angular/router';
import { UprogressService } from './uprogress.service';


import { PlatformLocation } from '@angular/common';


@Component({
	selector: 'uprogress',
	templateUrl: './uprogress.component.html',
	styles: [`
    .star {
      font-size: 2.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #ffc61a;
	}
`],
	providers: [NgbRatingConfig]

})
export class UprogressComponent implements OnInit {




	logout()
	{
		sessionStorage.removeItem('role')
		sessionStorage.removeItem('id')
		sessionStorage.removeItem('username')
		this.router.navigate(['home']);
	}

	training: Training[];
	user=sessionStorage.getItem("username")


	constructor(private router: Router,private uprogressService: UprogressService,location: PlatformLocation,config: NgbRatingConfig)
	{
		//location.onPopState(() => {
		//	console.log('pressed back in add!!!!!');
		//	this.router.navigateByUrl('/uprogress');
		//	history.forward();
		//	});

		config.max = 5;
   		 config.readonly = true;
	}

	ngOnInit(){
		this.uprogressService.getTrainings()
		.subscribe(data=>{
			this.training=data;
		});


			




}}