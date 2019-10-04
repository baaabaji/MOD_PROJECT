import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './usignup.model';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UsignupService{

  constructor(private http:HttpClient){}

  private UserUrl = 'http://localhost:8885/user/';


  public createUser(user) {
    return this.http.post<User>(this.UserUrl, user);
  }



}