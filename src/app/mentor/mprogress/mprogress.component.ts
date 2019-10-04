import { Component,OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

import {Training} from './mprogress.model';
import { Router } from '@angular/router';
import { MprogressService } from './mprogress.service';


@Component({
	selector: 'mprogress',
	templateUrl: './mprogress.component.html',
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
export class MprogressComponent implements OnInit {

	
	training: Training[];
	mentor=sessionStorage.getItem("username")


	constructor(private router: Router,private mprogressService: MprogressService,config: NgbRatingConfig)
	{
		config.max = 5;
   		 config.readonly = true;
	}

	
	logout()
	{
		sessionStorage.removeItem('role')
		sessionStorage.removeItem('id')
		sessionStorage.removeItem('username')
		this.router.navigate(['home']);
	}



	ngOnInit(){
		this.mprogressService.getTrainings()
		.subscribe(data=>{
			this.training=data;
		});
	}
	
}

