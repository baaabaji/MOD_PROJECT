import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import {map} from 'rxjs/operators';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
}

const httpOptions={
  headers:new HttpHeaders({
    "Content-Type":"application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private _UserData:HttpClient) { }

  //show all users
  public GetAll()
  {
    return this._UserData.get("https://localhost:44386/api/GetAllUSer");
  }

  //Block User
  public Block(id:any)
  {
    return this._UserData.get("https://localhost:44386/api/blockuser/"+id);
  }

  //Unblock Users
  public Unblock(id:any)
  {
    return this._UserData.get("https://localhost:44386/api/unblockuser/"+id);
  }

  //login
  public login(email,password)
  {
    
    return this._UserData.get("https://localhost:44386/api/login?Email="+email+'&Password='+password,httpOptions).
    pipe(map(data1=>(data1=JSON.parse(JSON.stringify(data1)))));
  }
Register(signUpData)
  {
    console.log(signUpData);
    return this._UserData.post("https://localhost:44386/api/register",signUpData,httpOptions).
    pipe(map(data1=>(data1=JSON.parse(JSON.stringify(data1)))));
  }
  //getAllSkills

  AllSkills()
  {
    return this._UserData.get("https://localhost:44386/api/getAllSkills");
  }

  //DeleteSkill

  public DeleteSkill(id)
  {
    return this._UserData.get("https://localhost:44386/api/delteteskill/"+id);
  }

  //AddSkill
  public AddSkill(data)
  {
    return this._UserData.post("https://localhost:44386/api/addskill",data,httpOptions).
    pipe(map(data1=>(data1=JSON.parse(JSON.stringify(data1)))));;
  }


  //SearchTrainings
  public SearchTrainings(data)
  {
    return this._UserData.get("https://localhost:44386/api/searchtrainings/"+data);
  }

  //getuser by id

  public GetUserById(id)
  {
    return this._UserData.get("https://localhost:44386/api/getuserbyid/"+id);
  }

  //get skill price
  public skillprice(techname)
  {
  return this._UserData.get("https://localhost:44386/api/getskillprice/"+techname);
  }

  //get skill by id
  public GetSkillById(id)
  {
    return this._UserData.get("https://localhost:44386/api/getskillbyid/"+id);
  }

  //to training

  public sendTrainingDtls(data)
  {
   
    return this._UserData.post("https://localhost:44386/api/addTraining",data,httpOptions).
      pipe(map(data1=>(data1=JSON.parse(JSON.stringify(data1)))));;
  }

  //get  Training Approvals
  //get all trainings
  public trainingApprovals()
  {
    return this._UserData.get("https://localhost:44386/api/getapprovals");
    
  }
  //Approve Training
  public ApproveTraining(id)
  {
    return this._UserData.get("https://localhost:44386/api/approveTraining/"+id)
  }

  public DeclineTraining(id)
  {
    return this._UserData.get("https://localhost:44386/api/declinedTraining/"+id)
  }
  
  //Get Training By id
  public trainingById(id)
  {
    return this._UserData.get("https://localhost:44386/api/trainingById/"+id)
  }

  //Training Payment
  public trainingPayment(data)
  {
    return this._UserData.post("https://localhost:44386/api/paymentgate",data,httpOptions).
      pipe(map(data1=>(data1=JSON.parse(JSON.stringify(data1)))));;
  }

  //All Payments details
  public AllPayments()
  {
   return this._UserData.get("https://localhost:44386/api/allpayments");
  }

  //Update Payment
  public UpdatePayment(id)
  {
    return this._UserData.get("https://localhost:44386/api/updatepay/"+id);
  }

  //update training Progress 
  public trainingProgress(data)
  {
    return this._UserData.post("https://localhost:44386/api/updateProgress",data,httpOptions).
    pipe(map(data1=>(data1=JSON.parse(JSON.stringify(data1)))));
  }


  //Get Admin Commision
  public AddCommision(data)
  {
    return this._UserData.post("https://localhost:44386/api/admincommision",data,httpOptions).
    pipe(map(data1=>(data1=JSON.parse(JSON.stringify(data1)))));
  }

  //update Trainer Profile

  public UpdateProfile(data)
  {
    return this._UserData.post("https://localhost:44386/api/updatetrainerprofile",data,httpOptions).
    pipe(map(data1=>(data1=JSON.parse(JSON.stringify(data1)))));
  }
}