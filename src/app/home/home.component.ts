import { Component, OnInit } from '@angular/core';
import { GetgamesService } from '../getgames.service';
import { Game } from '../game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  games!: Game[];
  isLoading:boolean = true;

  constructor(private _GetgamesService:GetgamesService){}

  ngOnInit(): void {
    this.getGames();
  }
  getGames(){
    this.isLoading = true;
    this._GetgamesService.getGames().subscribe({
      next:(games:Game[]) => {
        this.games = games.slice(0,3);
      },
      complete:() =>{
        this.isLoading = false;
      },
    })
  }
}
