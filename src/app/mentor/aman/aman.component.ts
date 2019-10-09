import { Component,OnInit } from '@angular/core';

import {User,Mentor} from './aman.model';
import{AmanService} from './aman.service';
import{Router} from '@angular/router';
import * as _ from "underscore";
import { MyService } from 'src/app/Services/my-service.service';
@Component({
	selector: 'aman',
	templateUrl: './aman.component.html',
	styleUrls: ['./aman.component.css']

})
export class AmanComponent implements OnInit {

	Userlist;
  msg;
  user;
  mentor;

  constructor(private _service:MyService,private route:Router) { 
   this.GetAllUsers();
  
  }

  ngOnInit() {
  }

  GetAllUsers()
  {
    this._service.GetAll().subscribe(data=>
      {
        this.Userlist = data;
        this.onGetUserRole();
      });
  }


  onGetUserRole() {
    this.user = _.where(this.Userlist,{role: 3});
    this.mentor  = _.where(this.Userlist,{role:2});
    console.log(this.mentor);
    console.log("Users"+this.user)
  }


  Unblock(id:any)
  {
   this._service.Unblock(id).subscribe((data)=>
   {
     this.msg=data;
    this.GetAllUsers();
    this.onGetUserRole();
    alert(this.msg);
    });
  //  alert("Unlocked No "+id);
  //  this.route.navigate(['/blockuser']);
  }

  Block(id:any)
  {
    this._service.Block(id).subscribe((data)=>
    {
      this.msg=data;
      this.GetAllUsers();
    this.onGetUserRole();
    alert(this.msg);
    });
    // alert("Blocked No "+id);
    // this.route.navigate(['/blockuser']);
  }
	
	logout()
	{
		sessionStorage.removeItem('role')
		sessionStorage.removeItem('id')
		sessionStorage.removeItem('username')
		this.route.navigate(['home']);
	}


}