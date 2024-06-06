import { Component, inject } from '@angular/core';
import { GamesService } from '../../core/shared/services/games.service';
import { Game } from '../../core/interfaces/game';
import { TermPipe } from '../../core/shared/pipes/term.pipe';
import { RouterModule } from '@angular/router';
import { SliceuntilePipe } from '../../core/shared/pipes/sliceuntile.pipe';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TermPipe, SliceuntilePipe, RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  games: Game[] = [];
  constructor(
    private _GamesService: GamesService,
  ) {}

  ngOnInit(): void {
    this.getGames();
  }


  // Get Games Data From API
  getGames(): void {
    this._GamesService.getGames().subscribe({
      next: (response) => {
        console.log(response);
        this.games = response;
      },
    });
  }

  // Start Video
  playVideo(el: HTMLVideoElement, sp: HTMLElement): void {
    this._GamesService.playVideo(el, sp);
  }

  // Stop Video
  stopVideo(el: HTMLVideoElement, sp: HTMLElement): void {
    this._GamesService.stopVideo(el, sp);
  }

}
