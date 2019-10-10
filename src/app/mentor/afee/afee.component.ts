import { Component,OnInit } from '@angular/core';

import {Payment} from './afee.model';
import {AfeeService} from './afee.service';
import {Router} from '@angular/router';
import {Training} from './afee.model';
import * as _ from "underscore";
import { MyService } from 'src/app/Services/my-service.service';
@Component({
	selector: 'afee',
	templateUrl: './afee.component.html',
	styleUrls: ['./afee.component.css']
})
export class AfeeComponent implements OnInit{

	payRecords;
  myPayRecord;
  userData;
  CurrentUser;
  Response;
  FeeData;
  Fee;
  Commision;
  Id;
  constructor(private myService:MyService, private router: Router) { }

  ngOnInit() {
    // let i= localStorage.getItem("Id");
    // this.CurrentUser= +i;
    this.getPaymentDtls();
  }


  getPaymentDtls()
  {
    this.myService.AllPayments().subscribe(data=>
      {

        this.payRecords=data;
        console.log(this.payRecords);
         console.log(this.myPayRecord);

      });
  }

  update(id)
  {

    this.Id=id;
    this.myPayRecord=_.where(this.payRecords,{id:id});
    console.log(this.myPayRecord);
    this.FeeData=_.where(this.payRecords,{id:id});
    console.log(this.Fee);
    this.Fee=this.FeeData[0].fees;
  }

  Mainupdate()
  {
    if(this.Commision!=undefined)
    {
      
      const data={
        id:this.Id,
        fees:this.Fee,
        commision:this.Commision
      };


      this.myService.AddCommision(data).subscribe(data=>{
        this.Response=data;
        alert(this.Response);
        this.getPaymentDtls();
        this.Commision="";
      });
    }
    else
    {
     alert("Please Fill the Amount");
    }
  

   }
	logout()
	{
		this.router.navigate(['home']);
	}


	
}