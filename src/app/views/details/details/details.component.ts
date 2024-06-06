import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Game } from '../../../core/interfaces/game';
import { GamesService } from '../../../core/shared/services/games.service';
import { CommonModule } from '@angular/common';
import { SliceuntilePipe } from '../../../core/shared/pipes/sliceuntile.pipe';
import { TermPipe } from '../../../core/shared/pipes/term.pipe';
import { SplitPipe } from '../../../core/shared/pipes/split.pipe';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [TermPipe, SliceuntilePipe, RouterModule, CommonModule, SplitPipe],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _GamesService: GamesService
  ) {}

  show: boolean = false;
  game: Game = {};

  // Get Games ID
  ngOnInit(): void {
    const curentId: number = this._ActivatedRoute.snapshot.params['id'];

    this._GamesService.getGamesId(curentId).subscribe({
      next: (response) => {
        console.log(response);
        this.game = response;
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

  // Show Text
  showText(): void {
    this.show = !this.show;
  }
}
