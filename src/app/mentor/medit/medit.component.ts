import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {MeditService} from './medit.service';
import {Mentor} from './medit.model'
import {Skill} from './medit.model'

@Component({
	selector: 'medit',
	templateUrl: './medit.component.html',
	styleUrls:['./medit.component.css']

})
export class MeditComponent implements OnInit {

	mentor: Mentor=new Mentor();
	newSkill: Skill=new Skill();
	skills: Skill[];
	showId=false;
	id=sessionStorage.getItem('id');
	
	constructor(private router: Router, private meditService: MeditService)
	{

	}
	ngOnInit(){
		this.meditService.getMentor()
		.subscribe(data=>{
			this.mentor=data;
		});

		this.meditService.getSkill()
		.subscribe(data1=>{
			this.skills=data1;
		});


	}


	deleteSkill(skill: Skill): void {
		this.meditService.deleteSkill(skill)
		  .subscribe( data1 => {
			this.skills = this.skills.filter(u => u !== skill);
		  })
	  };

	  createSkill(): void {
		  this.newSkill.mentorId=this.id;
		this.meditService.createSkill(this.newSkill)
			.subscribe( data => {
			  alert("Tech created successfully.");
			});
	
	  };


	  toggleId() {
		this.showId = !this.showId;
	  }
	
}