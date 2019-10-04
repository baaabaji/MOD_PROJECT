import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { OnInit } from '@angular/core';
import { FormBuilder,  Validators,FormGroup,ReactiveFormsModule  } from '@angular/forms';
import {User} from './usignup.model';
import {UsignupService} from './usignup.service';
import { MyService } from '../../Services/my-service.service';

@Component({
	selector: 'usignup',
	templateUrl: './usignup.component.html',
	styleUrls: ['./usignup.component.css']

})
export class UsignupComponent implements OnInit {
  

  
  constructor(private fb: FormBuilder, private mylog: MyService, private router: Router) { }
  UserRegister: FormGroup;
  submitted=false;
  Data;
  SkillData;
  
  ngOnInit() {
    this.UserRegister=this.fb.group({
		Email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
	  firstName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
	  lastName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
	  Phone:['',[Validators.required,Validators.pattern('^([6-9]{1})([0-9]{9})$')]],
	  LinkedinURL:['',Validators.required],
		Password:['',[Validators.required,Validators.minLength(8)]],
		userName:['',[Validators.required,Validators.minLength(6)]]
        
    });

    // this.MentorRegister=this.fb.group({
    //   Name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    //   Email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    //   Phone:['',[Validators.required,Validators.pattern('^([6-9]{1})([0-9]{9})$')]],
    //   LinkedIn:['',Validators.required],
    // 	Password:['',[Validators.required,Validators.minLength(8)]],
	// 	userName:['',[Validators.required,Validators.minLength(6)]]
    // });
  }


  onSubmit(){
    if(this.UserRegister.valid)
    {
      
      const usignup={
          Email:this.UserRegister.value.Email,
          firstName:this.UserRegister.value.firstName,
          lastName:this.UserRegister.value.lastName,

          Phone:this.UserRegister.value.Phone,
          LinkedinURL:this.UserRegister.value.LinkedinURL,
          userName:this.UserRegister.value.userName,
          Password:this.UserRegister.value.Password,
          active:true,
          role:3
        };
        this.UserRegister.reset();
        // console.log(usignup);
      
        this.mylog.Register(JSON.stringify(usignup)).subscribe((data)=>{this.Data=data
          // console.log(this.Data);
          alert("Registered Successfully");
          this.router.navigate(['login']);
        });
    }
    else
    {
      alert("Something Went Wrong!");
      this.router.navigate(['usignup']);
      // console.log('Valid?', this.UserRegister.valid);
    }
  
  }
  
  }