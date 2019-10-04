import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './upayment.model';
import {Payment} from './upayment.model';
import {Training} from './upayment.model';


const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UpaymentService{
  id=sessionStorage.getItem("id")

  constructor(private http:HttpClient){}

  private UserUrl = 'http://localhost:8885/user/';
  private PayUrl= 'http://localhost:8885/payment/';
  private TUrl='http://localhost:8885/training/';

  public getUser()
  {
    return this.http.get<User>(this.UserUrl+this.id);
  }
  public getPayment()
  {
    return this.http.get<Payment[]>(this.PayUrl+"/findbyuser/"+this.id);
  }

  public getTrainings(Pid)
  {
    return this.http.get<Training[]>(this.TUrl+"/findTrainingByUserId/"+Pid);
  }
  
  


}