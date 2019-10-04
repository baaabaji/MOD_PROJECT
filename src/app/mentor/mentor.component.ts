import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyService } from '../Services/my-service.service';
@Component({
	selector: 'my-login',
	templateUrl: './mentor.component.html',
	styleUrls: ['./mentor.component.css']
})
export class MentorComponent {
	

	constructor(private fb:FormBuilder,private my:MyService, private router:Router) { }

	Login: FormGroup;
	submitted = false;
	UserDetails;
	Data;
	
	
	ngOnInit() {
	  this.Login=this.fb.group({
	 
		Email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
		Password:['',[Validators.required,Validators.minLength(8)]]
	
	  });
	}
	
	onSubmit(){

	console.log(this.Login);
	  this.submitted = true;
	  if (this.Login.invalid) {
		  return;
	  }
	  this.my.login(this.Login.value.Email,this.Login.value.Password).subscribe((data)=>{this.Data=data
		  
		console.log(data);
		if(this.Data!=undefined)
		{
		if (this.Data.role == 1) {
		  this.router.navigate(['amenu']);
		}
		else if (this.Data.role == 2 && this.Data.active == true) {
		  this.router.navigate(['mmenu']);
		}
		else if (this.Data.role == 3 && this.Data.active == true) {
		  this.router.navigate(['umenu']);
		}
		else {
		  alert("Account Blocked");
		}
	  }
	  else
	  {
		alert("Invalid Email and Password");
	  }
  });
  
	 
  }
  }