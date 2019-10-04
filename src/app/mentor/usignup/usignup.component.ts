import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { OnInit } from '@angular/core';
import { FormBuilder,  Validators,FormGroup,ReactiveFormsModule  } from '@angular/forms';
import {User} from './usignup.model';
import {UsignupService} from './usignup.service';


@Component({
	selector: 'usignup',
	templateUrl: './usignup.component.html',
	styleUrls: ['./usignup.component.css']

})
export class UsignupComponent {

	constructor(private fb:FormBuilder) { }

  UserRegister: FormGroup;
  usignup: FormGroup;
  submitted = false;

  



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
    this.submitted = true;
    if (this.usignup.invalid) {
        return;
    }
    
    alert('SUCCESS!!'+JSON.stringify(this.usignup.value));
  }


//   onSubmit2(){
//     this.submitted = true;
//     if (this.MentorRegister.invalid) {
//         return;
//     }
    
//     alert('SUCCESS!!'+JSON.stringify(this.MentorRegister.value));
//   }
 }
