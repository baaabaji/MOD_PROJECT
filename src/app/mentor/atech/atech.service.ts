import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Tech } from './atech.model';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AtechService{

  id=sessionStorage.getItem('id');

  constructor(private http:HttpClient){}

  private tUrl = 'http://localhost:8885/technology/';

  public getTrainings()
  {
    return this.http.get<Tech[]>(this.tUrl);
  }

  
  public deleteTech(tech) {
    return this.http.delete(this.tUrl + "/"+ tech.id);
  }

  public createTech(tech) {
    return this.http.post<Tech>(this.tUrl, tech);
  }



}