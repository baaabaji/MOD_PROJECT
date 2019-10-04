import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Training } from './mprogress.model';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class MprogressService{





  id=sessionStorage.getItem('id')

  constructor(private http:HttpClient){}

  private tUrl = 'http://localhost:8885/training/';

  public getTrainings()
  {
    return this.http.get<Training[]>(this.tUrl+"findTrainingByMentorId/"+this.id);
  }

 
  
  public deleteTech(training) {
    return this.http.delete(this.tUrl + "/"+ training.id);
  }

  public createTech(training) {
    return this.http.post<Training>(this.tUrl, training);
  }



}