import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetGamesByService } from './get-games-by.service';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent{
  isLoading:boolean = true;
  param!: {[key: string]: string};
  games!:object[]
  gamesafter:any = [];
  length:boolean = true;
  test:number = 21

  constructor(private _ActivatedRoute:ActivatedRoute, private _GetGamesByService:GetGamesByService){
    this._ActivatedRoute.params.subscribe({
      next:(data:any) => {
        this.param = {[data["type"]]: data["data"]}
        this.isLoading = true;
        this._GetGamesByService.getGameBy(this.param).subscribe({
          next:(games)=>{
            this.games = games;

            this.gamesafter = this.games.slice(0, 21);

          },
          complete:()=>{
            this.isLoading = false;
          }
        });
      }
    })
  }

  loadMore(){
    if (this.gamesafter.length == this.games.length) {
      this.length = false
    }
    if (this.gamesafter.length+20 < this.games.length) {
      this.gamesafter.push(...this.games.slice(this.gamesafter.length, this.gamesafter.length+21));
    }else if(this.gamesafter.length < this.games.length){
      this.gamesafter.push(...this.games.slice(this.gamesafter.length, ));
    }
    if (this.gamesafter.length == this.games.length) {
      this.length = false
    }
  }
}
