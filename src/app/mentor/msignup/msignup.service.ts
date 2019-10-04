import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Mentor} from './msignup.model';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class MsignupService{

  constructor(private http:HttpClient){}

  private MentorUrl = 'http://localhost:8885/mentor/';

  public createMentor(mentor) {
    return this.http.post<Mentor>(this.MentorUrl,mentor);
  }



}