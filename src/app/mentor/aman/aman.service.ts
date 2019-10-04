import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './aman.model';
import {Mentor} from './aman.model';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AmanService{

  constructor(private http:HttpClient){}

  private UserUrl = 'http://localhost:8885/user/';
  private MentorUrl = 'http://localhost:8885/mentor/';

  public getUsers()
  {
    return this.http.get<User[]>(this.UserUrl);
  }

  public getMentors()
  {
    return this.http.get<Mentor[]>(this.MentorUrl);
  }

  
  public deleteUser(user) {
    return this.http.delete(this.UserUrl + "/"+ user.id);
  }

  public deleteMentor(mentor) {
    return this.http.delete(this.MentorUrl + "/"+ mentor.id);
  }

  


}