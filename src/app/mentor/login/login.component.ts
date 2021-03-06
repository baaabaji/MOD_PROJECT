import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyService } from '../../Services/my-service.service';
import { JsonpInterceptor } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private mylog: MyService, private router: Router) { }

  Login: FormGroup;
  submitted = false;
  UserDetails;
  Data:Object;

 
  ngOnInit() {
    this.Login = this.fb.group({

      Email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Password: ['', [Validators.required, Validators.minLength(8)]]

    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.Login.invalid) 
    {
      return;
      // console.log("Here");
    }

    // console.log( JSON.stringify(this.Login.value));
    this.mylog.login(this.Login.value.Email, this.Login.value.Password).subscribe((data) => {
  //     if(this.Data!=undefined)
  // {
        if(data.active == true)
        {
          //admin 
        if (data.role == 1) {
          localStorage.setItem("adminid", data.id);
          this.router.navigate(['amenu']);
        }
        //mentor
        else if (data.role == 2 ) 
        
        {
          localStorage.setItem("mentorid", data.id);
          this.router.navigate(['mmenu']);
        }
        //user
        else if (data.role == 3) 
        {
          localStorage.setItem("userId", data.id);

          this.router.navigate(['umenu']);
        }
      else {
        alert("Account Blocked");
      }}
    // }}
      // else{
      //   alert("Invalid Credentials");
      //   this.Login.reset();
      // }
    
  
  });

  }
}
