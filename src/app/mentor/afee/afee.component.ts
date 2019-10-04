import { Component,OnInit } from '@angular/core';

import {Payment} from './afee.model';
import {AfeeService} from './afee.service';
import {Router} from '@angular/router';
import {Training} from './afee.model';

@Component({
	selector: 'afee',
	templateUrl: './afee.component.html'

})
export class AfeeComponent implements OnInit{

	payments: Payment[];
	training: Training=new Training();
	showId=false;
	amt=0;
	Pid=0;
	Remark="0 of 4";
	commission;
	displayId=false;
	constructor(private router: Router,private afeeService: AfeeService)
	{
		
	}

	ngOnInit(){
	
		this.afeeService.getPayment()
		.subscribe(data=>{
			this.payments=data;
		});

	}
	toggle()
	{
		this.displayId=!this.displayId;
	}


	getTraining(Paid,x,id)
	{
		this.amt=x;
		this.Pid=id;
		this.afeeService.getTraining(Paid)
		.subscribe(data2=>{
			this.training=data2;
		})
		this.showId=!this.showId;
	
	}

	setAmount(progress,commision)

	{
	
		this.amt=(this.amt-(this.amt*(commision/100)));
		this.amt=(this.amt/4);
		if(progress<=25 && progress>0)
		{
			this.amt=this.amt;
			this.Remark="1 of 4";
			alert("First Payment Done");
		}
		else if(progress<=50 && progress>25)
		{
			this.amt=this.amt*2;
			this.Remark="2 of 4";
			alert("Second Payment Done");
		}
		else if(progress<=75 && progress>50)
		{
			this.amt=this.amt*3;
			this.Remark="3 of 4";
			alert("Third Payment Done");
		}
		else if(progress<=100 && progress>75)
		{
			this.amt=this.amt*4;
			this.Remark="4 of 4";
			alert("Full Payment Done");
		}

		this.afeeService.setAmount(this.amt,this.Remark,this.Pid)
		.subscribe(data1=>{

		});
	}

	setCommission(commission,Tid)
	{
		this.afeeService.setCommision(commission,Tid)
		.subscribe(data=>{
			alert("Commission amount Changed")
		});
	}

	logout()
	{
		sessionStorage.removeItem('role')
		sessionStorage.removeItem('id')
		sessionStorage.removeItem('username')
		this.router.navigate(['home']);
	}


	
}