import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import {map} from 'rxjs/operators';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
}

const httpOptions={
  headers:new HttpHeaders({
    "Content-Type":"application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private _UserData:HttpClient) { }

  //show all users
  public GetAll()
  {
    return this._UserData.get("https://localhost:44386/api/getuser");
  }

  //Block User
  public Block(id:any)
  {
    return this._UserData.get("https://localhost:44386/api/blockuser/"+id);
  }

  //Unblock Users
  public Unblock(id:any)
  {
    return this._UserData.get("https://localhost:44386/api/unblockuser/"+id);
  }

  //login
  public login(email,password)
  {
    
    return this._UserData.get("https://localhost:44386/api/login?Email="+email+'&Password='+password,httpOptions).
    pipe(map(data1=>(data1=JSON.parse(JSON.stringify(data1)))));
  }

  //Register
  public Register(signUpData)
  {
    console.log(signUpData);
    return this._UserData.post("https://localhost:44386/api/register",signUpData,httpOptions).
    pipe(map(data1=>(data1=JSON.parse(JSON.stringify(data1)))));
  }

}