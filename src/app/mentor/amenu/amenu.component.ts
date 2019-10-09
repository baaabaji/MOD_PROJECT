import { Component } from '@angular/core';
import {Router} from '@angular/router'
import * as _ from "underscore";
import { MyService } from 'src/app/Services/my-service.service';

@Component({
	selector: 'amenu',
	templateUrl: './amenu.component.html',
	styleUrls: ['./amenu.component.css']
})
export class AmenuComponent {

	SkillList;
  msg;
  prerequisites;
  name;
  toc;
  status;
  fees;


  constructor(private ServiceSkill:MyService, private route:Router) {
    this.GetAllSkills();
   }

  ngOnInit() {
 
  }


  GetAllSkills()
  {
    this.ServiceSkill.AllSkills().subscribe(data=>{
      this.SkillList=data;
      console.log(this.SkillList||JSON);
    });
  }

  Delete(id)
  {
   
    this.ServiceSkill.DeleteSkill(id).subscribe(data=>{
      this.msg=data;
      alert(this.msg);
      // console.log(this.msg);
      this.GetAllSkills();
    });
   
  
  }

  Add()
  {
   
    const info={
      name:this.name,
      toc:this.toc,
      prerequisites:this.prerequisites,
      fees:this.fees,
      };

    if(this.name!=undefined && this.toc!=undefined && this.prerequisites!=undefined && this.fees!=undefined)
    {
       this.ServiceSkill.AddSkill(JSON.stringify(info)).subscribe(data=>{
      this.msg=data;
      console.log(this.msg);
      this.name="";
      this.toc="";
      this.prerequisites="";
      this.fees="";
      this.GetAllSkills();
    });
     }

     else
     {
       alert("Fields cannot be empty");
     }
  }
	
	logout()
	{
		sessionStorage.removeItem('role')
		sessionStorage.removeItem('id')
		sessionStorage.removeItem('username')
		this.route.navigate(['home']);
	}

	
}