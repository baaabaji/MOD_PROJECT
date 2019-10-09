import { Component, OnInit } from '@angular/core';

import {Tech} from './atech.model';
import {Router} from '@angular/router';

import { MyService } from 'src/app/Services/my-service.service';
import * as _ from "underscore";
@Component({
	selector: 'atech',
	templateUrl: './atech.component.html',
	styleUrls: ['./atech.component.css']

})
export class AtechComponent implements OnInit{
	CurrentTrainings;
  constructor(private myService:MyService, private router:Router) { }

  ngOnInit() {
    this.getAllTrainings();
  }


  getAllTrainings()
  {
    this.myService.trainingApprovals().subscribe(data=>
      {
        this.CurrentTrainings=data;
        console.log(this.CurrentTrainings);
      });
  }


	

	  logout()
	{
		sessionStorage.removeItem('id')
		sessionStorage.removeItem('role')
		sessionStorage.removeItem('username')
		this.router.navigate(['home']);
	}
	
	




	
}