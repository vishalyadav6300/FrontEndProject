import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private hc:HttpClient) { }
  getData():Observable<any>
  {
     return this.hc.get<any>("https://api-football-beta.p.rapidapi.com/countries",{
      "headers":{
        "x-rapidapi-key": "1eefeb459bmsh62e255e1dc0bd16p1f62d5jsnc8167cbc4d78",
        "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
        }
      }
     );
  }
  getTeamsData():Observable<any>
  {
    return this.hc.get<any>("https://sportscore1.p.rapidapi.com/teams",{
      "headers":
      {
        "x-rapidapi-key": "df53ff90b0mshb20d734ed3170a0p1ca434jsn75d15e26e358",
	      "x-rapidapi-host": "sportscore1.p.rapidapi.com",
	      "useQueryString": "true"
      }
    })
  }
  getPlayersData():Observable<any>
  {
    return this.hc.get<any>("https://sportscore1.p.rapidapi.com/players",{
      "headers":
      {
        "x-rapidapi-key": "df53ff90b0mshb20d734ed3170a0p1ca434jsn75d15e26e358",
        "x-rapidapi-host": "sportscore1.p.rapidapi.com",
        "useQueryString": "true"
      }
    })
  }
}
