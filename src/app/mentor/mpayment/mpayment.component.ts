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
  show:boolean=true;
  Uid;
  getRecord:any;
  constructor(private myService:MyService,private router:Router) { 
    if(localStorage.getItem("mentorid")==undefined)
    {
      alert("Please login");
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    let i= localStorage.getItem("mentorid");
    this.CurrentUser= +i;
    this.getPaymentDtls();
  }


  getPaymentDtls()
  {
    this.myService.AllPayments().subscribe(data=>
      {

		this.payRecords=data;
		 this.myPayRecord=_.where(this.payRecords,{mentorId:this.CurrentUser});
			
		 console.log(this.myPayRecord);
      });
  }


  getDetails(rowId)
  {
   
    this.getRecord=_.where(this.payRecords,{id:rowId});
    let uid=this.getRecord[0].userId;
    this.Uid= uid;
	this.getUserById(this.Uid);
	
	console.log("worjunk");
  }

  getUserById(id)
  {
    this.myService.GetUserById(id).subscribe(data=>
      {
         this.userData=data;
          console.log(" hwew us user"+this.userData);
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
  