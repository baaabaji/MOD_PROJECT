import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
	selector: 'amenu',
	templateUrl: './amenu.component.html'

})
export class AmenuComponent {

	constructor(private router: Router)
	{
		
		
	}
	
	logout()
	{
		sessionStorage.removeItem('role')
		sessionStorage.removeItem('id')
		sessionStorage.removeItem('username')
		this.router.navigate(['home']);
	}

	
}