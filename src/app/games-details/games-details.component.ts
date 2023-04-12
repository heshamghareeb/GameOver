import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../game';
import { ActivatedRoute } from '@angular/router';
import { GetgamesService } from '../getgames.service';
import { GameDetails } from '../game-details';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-games-details',
  templateUrl: './games-details.component.html',
  styleUrls: ['./games-details.component.scss']
})
export class GamesDetailsComponent implements OnInit{
  gameId!:string;
  game!:GameDetails;
  imageUrl:string = '';
  isLoading:boolean = true;


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplayTimeout: 2000,
    navText: ['', ''],

    responsive: {
      0: {
        items: 1
      },
      // 400: {
      //   items: 2
      // },
      // 740: {
      //   items: 3
      // },
      // 940: {
      //   items: 4
      // }
    },
    nav: false
  }





  constructor(private _ActivatedRoute:ActivatedRoute, private _GetgamesService:GetgamesService){
    this._ActivatedRoute.params.subscribe({
      next:(id:any) => {this.gameId = id}
    })
  }
  ngOnInit(): void {
    this.getGameDetails();
  }

  getGameDetails(){
    this.isLoading = true;
    this._GetgamesService.getGameDetails(this.gameId).subscribe({
      next:(game:GameDetails) => {
        console.log(game);
        this.game = game
        this.imageUrl = 'https://www.freetogame.com/g/'+this.game.id+'/background.jpg'
      },
      complete: () => this.isLoading = false
    })
  }
}
