import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Mentor} from './mprofile.model';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class MprofileService{
  constructor(private http:HttpClient){}

  private MentorUrl = 'http://localhost:8885/mentor/';
  

  public getMentors()
  {
    return this.http.get<Mentor[]>(this.MentorUrl);
  }


  


}