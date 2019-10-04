import { Component,OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

import {Training} from './ctraining.model'
import { Router } from '@angular/router';
import { CtrainingService } from './ctraining.service';

@Component({
	selector: 'ctraining',
	templateUrl: './ctraining.component.html',
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
export class CtrainingComponent implements OnInit {
	



	training: Training[];
	user=sessionStorage.getItem("username")


	constructor(private router: Router,private ctrainingService: CtrainingService,config: NgbRatingConfig)
	{
		config.max = 5;
   		 config.readonly = true;
		
	}

	ngOnInit(){
		this.ctrainingService.getTrainings()
		.subscribe(data=>{
			this.training=data;
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