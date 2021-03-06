import { Component,OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

import {Training} from './ctraining.model'
import { Router } from '@angular/router';
import { MyService } from 'src/app/Services/my-service.service';
import * as _ from "underscore";
@Component({
	selector: 'ctraining',
	templateUrl: './ctraining.component.html',
	styleUrls: ['./ctraining.component.css'
]
//  [`
//     .star {
//       font-size: 2.5rem;
//       color: #b0c4de;
//     }
//     .filled {
//       color: #ffc61a;
// 	}
// `],
// 	providers: [NgbRatingConfig]

})
export class CtrainingComponent implements OnInit {
	
  myTrainings;
  CurrentUser; 
  Progress;
  show:boolean=true; 
  constructor(private myService:MyService,private router:Router) { 
   if(localStorage.getItem("userId")==undefined)
  {
    alert("Please login");
    this.router.navigate(['login']);
  }
  }

  ngOnInit() {
    let i= localStorage.getItem("userId");
    this.CurrentUser= +i;
    // console.log(this.CurrentUser);
    this.getTrainings();
   
  }


  getTrainings()
  {
    this.myService.trainingApprovals().subscribe(data=>{
      this.myTrainings=_.where(data,{accept:true,userId:this.CurrentUser,PaymentStatus:true, progress:100});
      if(Object.keys(this.myTrainings).length>0)
      {
        this.show=false;
      }
      else
      {
        this.show=true;
      }
      // console.log(this.myTrainings);
    });
  }
}