import { Component, OnInit } from '@angular/core';

import {Tech} from './tsearch.model';
import { TsearchService } from './tsearch.service';
import { Router } from '@angular/router';
import {Training} from './tsearch.model';
import { MyService } from '../../Services/my-service.service';
@Component({
	selector: 'tsearch',
	templateUrl: './tsearch.component.html',
	styleUrls: ['./tsearch.component.css']

})
export class TsearchComponent implements OnInit {

	SKillData;
  Technology:any;
  // Timings:any;
  msg;
  show:boolean=false;
  show_nodata:boolean=false;

	constructor(private Route: Router, private mylog: MyService){

	}

	ngOnInit() { 
		this.mylog.AllSkills().subscribe(data=>{
		  this.SKillData=data;
		  console.log(this.SKillData);
		});
	  }
	
	
	logout()
	{
		localStorage.clear(); 
		this.Route.navigate(['home']);
	}

	//Search Trainings

	Find()
	{
	  // this.Timings!=undefined
	  if(this.Technology!=undefined)
	  {
	 console.log(this.Technology);
  
	  this.mylog.SearchTrainings(this.Technology).subscribe(data=>{
		this.msg=data;
		console.log(this.msg);
		if(Object.keys(this.msg).length>0)
		{
		  this.show=true;
		  this.show_nodata=false;
		}
		else
		{
		  this.show=false;
		  this.show_nodata=true;
		}
	  });
	}
	  else
	  {
		alert("Please Select Technology and Timings");
	  }
	}
  
  //
	SendToMentor(id)
	{
	
	 const data={
	   ID:id,
	  Technology:this.Technology
	};
  
	 this.Route.navigate(['/cmentor'],{queryParams:data});
	}
  }