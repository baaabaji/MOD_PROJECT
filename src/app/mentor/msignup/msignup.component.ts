import { Component } from '@angular/core';
import {Router} from  '@angular/router';
import { FormBuilder,  Validators,FormGroup,ReactiveFormsModule  } from '@angular/forms';
import {Mentor} from './msignup.model';
import {MsignupService} from './msignup.service';

@Component({
	selector: 'msignup',
	templateUrl: './msignup.component.html',
	styleUrls: ['./msignup.component.css']


})
export class MsignupComponent {constructor(private fb:FormBuilder) { }

MentorRegister: FormGroup;
submitted = false;





ngOnInit() {
  this.MentorRegister=this.fb.group({
	  Email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
	firstName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
	lastName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
	Phone:['',[Validators.required,Validators.pattern('^([6-9]{1})([0-9]{9})$')]],
	LinkedinURL:['',Validators.required],
	  Password:['',[Validators.required,Validators.minLength(8)]],
	  userName:['',[Validators.required,Validators.minLength(6)]],
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
  this.submitted = true;
  if (this.MentorRegister.invalid) {
	  return;
  }
  
  alert('SUCCESS!!'+JSON.stringify(this.MentorRegister.value));
}


//   onSubmit2(){
//     this.submitted = true;
//     if (this.MentorRegister.invalid) {
//         return;
//     }
  
//     alert('SUCCESS!!'+JSON.stringify(this.MentorRegister.value));
//   }
}
