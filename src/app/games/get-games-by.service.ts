import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetGamesByService{

  headers = {
    'X-RapidAPI-Key': '8f86b9eaa9msh0e6d5dfedb1eb80p1dba82jsn440848ee6e63',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }

  constructor(private _HttpClient:HttpClient) {}

  getGameBy(params:any):Observable<any>{
    return this._HttpClient.get(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      {
        headers:this.headers,
        params:params
      }
    )
  }

}
