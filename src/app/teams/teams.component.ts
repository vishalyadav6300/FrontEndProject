import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private dsObj:DataService) { }
  p:number=1;
  teamsData:any=[];
  ngOnInit(): void 
  {
    this.dsObj.getTeamsData().subscribe(
      datax=>{
        this.teamsData=datax.data;
      },
      err=>{
        console.log("Error occured in teams",err);
      }
    );
  }
}
