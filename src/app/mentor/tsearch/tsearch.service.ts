import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Tech } from './tsearch.model';
import {Training} from './tsearch.model';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class TsearchService{

  id=sessionStorage.getItem('id')

  constructor(private http:HttpClient){}

  private tUrl = 'http://localhost:8885/technology/';
  private EUrl= 'http://localhost:8885/training/'

  public getTrainings()
  {
    return this.http.get<Tech[]>(this.tUrl);
  }
  public enroll( trainid )
  {
    
    return this.http.get<Training>(this.EUrl+this.id+'/'+trainid);
    
  }


}