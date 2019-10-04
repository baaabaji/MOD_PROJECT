import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Mentor} from './medit.model';
import {Skill} from './medit.model';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class MeditService{
  id=sessionStorage.getItem("id");
  constructor(private http:HttpClient){}

  private MentorUrl = 'http://localhost:8885/mentor/';
  private SkillUrl = 'http://localhost:8885/skill/';


  public getMentor()
  {
    return this.http.get<Mentor>(this.MentorUrl+this.id);
  }

  public getSkill()
  {
    return this.http.get<Skill[]>(this.SkillUrl+"findByMentorId/"+this.id);
  }

  public createSkill(skill) {
    return this.http.post<Skill>(this.SkillUrl, skill);
  }

  
  public deleteSkill(skill) {
    return this.http.delete(this.SkillUrl + "/"+ skill.id);
  }



  public deleteMentor(mentor) {
    return this.http.delete(this.MentorUrl + "/"+ mentor.id);
  }

  


}