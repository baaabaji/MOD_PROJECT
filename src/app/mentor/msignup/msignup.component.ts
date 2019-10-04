import { Component } from '@angular/core';
import {Router} from  '@angular/router';
import { FormBuilder,  Validators,FormGroup,ReactiveFormsModule  } from '@angular/forms';
import {Mentor} from './msignup.model';
import {MsignupService} from './msignup.service';
import { MyService } from 'src/app/Services/my-service.service';

@Component({
	selector: 'msignup',
	templateUrl: './msignup.component.html',
	styleUrls: ['./msignup.component.css']


})
export class MsignupComponent {
  constructor(private fb: FormBuilder, private mylog:MyService, private router: Router) { }
  MentorRegister: FormGroup;
  submitted=false;
  Data;
  SkillData;





ngOnInit() {
  this.MentorRegister=this.fb.group({
	  Email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
	firstName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
	lastName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
	Phone:['',[Validators.required,Validators.pattern('^([6-9]{1})([0-9]{9})$')]],
  LinkedinURL:['',Validators.required],
  userName:['',[Validators.required,Validators.minLength(6)]],
	  Password:['',[Validators.required,Validators.minLength(8)]],
	  YOE:['',[Validators.required,Validators.pattern('[0-9]*')]],
	  profile:['',[Validators.required]]
	  
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
  if(this.MentorRegister.valid)
  {
    
    const msignup={
        Email:this.MentorRegister.value.Email,
        firstName:this.MentorRegister.value.firstName,
        lastName:this.MentorRegister.value.lastName,

        Phone:this.MentorRegister.value.Phone,
        LinkedinURL:this.MentorRegister.value.LinkedinURL,
        userName:this.MentorRegister.value.userName,
        Password:this.MentorRegister.value.Password,
        YOE:this.MentorRegister.value.YOE,
        profile:this.MentorRegister.value.profile,
        active:true,
        role:2
      };
      this.MentorRegister.reset();
      console.log(msignup);
    
      this.mylog.Register(JSON.stringify(msignup)).subscribe((data)=>{this.Data=data
        console.log(this.Data)
        alert("Registered Successfully");
        this.router.navigate(['login']);
      });
  }
  else
  {
    console.log('Valid?', this.MentorRegister.valid);
  }

}

}