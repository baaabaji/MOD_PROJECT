import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {MprofileService} from './mprofile.service';
import {Mentor} from './mprofile.model'
import { MyService } from 'src/app/Services/my-service.service';


@Component({
	selector: 'mprofile',
	templateUrl: './mprofile.component.html',
	styleUrls:['./mprofile.component.css']

})
export class MprofileComponent implements OnInit {

	CurrentUser;
  ProfileData;
  TrainingDtls;
  Update:boolean=false;

  msg;

  constructor(private myService:MyService,private route:Router) {
    if(localStorage.getItem("trainerid")==undefined)
    {
      alert("Please login");
      this.route.navigate(['login']);
    }
   }

  ngOnInit() {
    let i= localStorage.getItem("trainerid");
    this.CurrentUser= +i;
    this.getUserProfile();
  
  }

getUserProfile()
{
  this.myService.GetUserById(this.CurrentUser).subscribe(data=>
    {
      this.ProfileData=data;
      console.log(this.ProfileData);
      
    })
}

Edit()
{
  this.Update=true;
}

Save()
{
  this.Update=false;
 
   const data={

    contactNumber: this.ProfileData.contactNumber,
    firstName:this.ProfileData.firstName,
    id:this.CurrentUser,
    lastName:this.ProfileData.lastName,
    yearOfExperience:this.ProfileData.yearOfExperience
   }

   this.myService.UpdateProfile(data).subscribe(data=>{
     this.msg=data;
     alert(this.msg);
   });

}

Cancel()
{
  this.Update=false;
}
logout()
	{
		localStorage.clear();
		this.route.navigate(['home']);
	}

}
