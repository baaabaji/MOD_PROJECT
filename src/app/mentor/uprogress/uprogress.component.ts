import { Component,OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

import {Training} from './uprogress.model'
import { Router } from '@angular/router';


import { PlatformLocation } from '@angular/common';
import { MyService } from 'src/app/Services/my-service.service';

import * as _ from "underscore";
@Component({
	selector: 'uprogress',
	templateUrl: './uprogress.component.html',
	
	styleUrls: ['./uprogress.component.css'],
	providers: [NgbRatingConfig]

})
export class UprogressComponent implements OnInit {

	myData;
  Approved;
  Declined;
  Pending;

  allReciptData;
  ReciptData;
  CurrentUser;

  constructor(private myService:MyService,private route:Router) {
    if(localStorage.getItem("userId")==undefined)
    {
      alert("Please login");
      this.route.navigate(['login']);
    }

   }

  ngOnInit() {
  let i= localStorage.getItem("userId");
  this.CurrentUser= +i;
  this.getmyData();

  }

  getmyData()
  {
    this.myService.trainingApprovals().subscribe(data=>
      {
        this.myData=data;
        console.log(this.myData);
        this.Approved=_.where(this.myData,{accept:true,userId:this.CurrentUser});
        console.log(this.Approved);
         this.Pending=_.where(this.myData,{accept:false,rejected:false,userId:this.CurrentUser});
        this.Declined=_.where(this.myData,{rejected:true,userId:this.CurrentUser});
        console.log("Pending "+JSON.stringify(this.Pending));
       
      });
  }


  getPaymentDtls()
  {
    this.myService.AllPayments().subscribe(data=>
      {
        this.allReciptData=data;
      })
  }


  Pay(id)
  {
    alert(id);  
    const data={
      ID:id,
   };
 
    this.route.navigate(['/upayment'],{queryParams:data});  
  }

  SeeRecipt(id)
  {
    console.dir(this.allReciptData);
    
   this.ReciptData=_.where(this.allReciptData,{skillId:id,userId:this.CurrentUser,PaymentStatus:true});
    
    console.log(this.ReciptData);


  }
  logout()
  {
	  localStorage.clear();
	  this.route.navigate(['home']);
  }

}
