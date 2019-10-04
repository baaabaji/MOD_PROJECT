import { Component } from '@angular/core';
import {Router} from '@angular/router';

import {AloginService} from './alogin.service';

@Component({
	selector: 'alogin',
	templateUrl: './alogin.component.html',
	styleUrls:['./alogin.component.css']

})
export class AloginComponent {

	username=''
	password=''
	
	constructor(private router: Router,private aloginService: AloginService)
	{

	}


	authenticate(): void{

		if(this.aloginService.authenticate(this.username,this.password))
		{
			this.router.navigate(['amenu']);
			sessionStorage.setItem('username',"Devansh");
			sessionStorage.removeItem('showId')
		}
		else
		{
			alert("incorrect credentials");
		}
	}


}