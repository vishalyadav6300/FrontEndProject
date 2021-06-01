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
}
