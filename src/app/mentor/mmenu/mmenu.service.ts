import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Mentor} from './mmenu.model';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class MmenuService{
  id=sessionStorage.getItem("id");
  constructor(private http:HttpClient){}

  private MentorUrl = 'http://localhost:8885/mentor/';
  

  public getMentor()
  {
    return this.http.get<Mentor>(this.MentorUrl+this.id);
  }


  public deleteMentor(mentor) {
    return this.http.delete(this.MentorUrl + "/"+ mentor.id);
  }

  


}