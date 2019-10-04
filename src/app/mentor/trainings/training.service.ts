import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Tech } from './training.model';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class TrainingService{

  constructor(private http:HttpClient){}

  private tUrl = 'http://localhost:8885/technology/';

  public getTrainings()
  {
    return this.http.get<Tech[]>(this.tUrl);
  }


}