import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(private dsObj:DataService) { }
  player:any;
  p:number=1;
  searchTerm:string;
  ngOnInit(): void {
      this.dsObj.getPlayersData().subscribe(
        datax=>{
           this.player=datax.data;
        },
        err=>
        {
          console.log("Error in getting data in player.ts",err);
        }
      )
  }
}
