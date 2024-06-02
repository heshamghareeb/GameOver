import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetgamesService {
  baseLink = 'https://www.freetogame.com/api/games';
  header= {
		'X-RapidAPI-Key': '8f86b9eaa9msh0e6d5dfedb1eb80p1dba82jsn440848ee6e63',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}

  constructor(private _HttpClient:HttpClient) {}

  getGames():Observable<any>{
    return this._HttpClient.get(
      "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity",
      {headers:this.header}
    )
  }

  getGameDetails(params:any):Observable<any>{
    return this._HttpClient.get(
      "https://free-to-play-games-database.p.rapidapi.com/api/game",
      {
        headers:this.header,
        params:params
      }
    )
  }

}
