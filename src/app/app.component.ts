import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  Countrydata:any;
  constructor(private ds:DataService)
  {
  }
  ngOnInit()
  {
    this.ds.getData().subscribe(
      data=>{
        this.Countrydata=data;
      },
      err=>
      {
        console.log("Error",err);
      }
    )
    console.log(this.Countrydata);
  }
}
