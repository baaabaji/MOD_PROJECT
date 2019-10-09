import { Component } from '@angular/core';
import * as _ from "underscore";
import { MyService } from '../../Services/my-service.service';
import { Router } from '@angular/router';
@Component({
	selector: 'mpayment',
	templateUrl: './mpayment.component.html',
	styleUrls: ['./mpayment.component.css']

})
export class MpaymentComponent {
	
	payRecords;
	myPayRecord;
	userData;
	CurrentUser;
	constructor(private myService:MyService, private router: Router) { }
  
	ngOnInit() {
	  let i= localStorage.getItem("Id");
	  this.CurrentUser= +i;
	  this.getPaymentDtls();
	}
  
  
	getPaymentDtls()
	{
	  this.myService.AllPayments().subscribe(data=>
		{
  
		  this.payRecords=data;
		  console.log(this.payRecords);
		   this.myPayRecord=_.where(this.payRecords,{mentorId:this.CurrentUser});
		   console.log(this.myPayRecord);
  
		});
	}
  
	getUserById(id)
	{
	  this.myService.GetUserById(id).subscribe(data=>
		{
		   this.userData=data;
		})
	}
	logout()
	{
		sessionStorage.removeItem('role')
		sessionStorage.removeItem('id')
		sessionStorage.removeItem('username')
		this.router.navigate(['home']);
	}
  
  }
  