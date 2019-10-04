import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {User} from './umenu.model';


const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UmenuService{
  id=sessionStorage.getItem("id");
  constructor(private http:HttpClient){}

  private UserUrl = 'http://localhost:8885/user/';
  


  public getUser()
  {
    return this.http.get<User>(this.UserUrl+this.id);
  }

  


}