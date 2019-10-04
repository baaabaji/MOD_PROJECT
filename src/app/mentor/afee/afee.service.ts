import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {Payment} from './afee.model';
import {Training} from './afee.model';


const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AfeeService{


  constructor(private http:HttpClient){}

  private PayUrl= 'http://localhost:8885/payment/'
  private TUrl= 'http://localhost:8885/training/'

  
  public getTraining(Paid)
 
  {
    return this.http.get<Training>(this.TUrl+Paid);
  }


  public getPayment()
  {
    return this.http.get<Payment[]>(this.PayUrl);
  }

  public setAmount(amount,Remark,Pid)
  {
    return this.http.get<Payment>(this.PayUrl+amount+"/"+Remark+"/"+Pid)
  }
  
  public setCommision(commission,Tid){
    return this.http.get<Training>(this.TUrl+"/ChangeCommision/"+commission+"/"+Tid);
  }


}