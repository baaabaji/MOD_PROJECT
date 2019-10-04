import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {MprofileService} from './mprofile.service';
import {Mentor} from './mprofile.model'


@Component({
	selector: 'mprofile',
	templateUrl: './mprofile.component.html',
	styleUrls:['./mprofile.component.css']

})
export class MprofileComponent implements OnInit {

	mentor: Mentor[];
	constructor(private router: Router, private mprofileService: MprofileService)
	{

	}
	

	ngOnInit(){
		this.mprofileService.getMentors()
		.subscribe(data=>{
			this.mentor=data;
		});


	}

}