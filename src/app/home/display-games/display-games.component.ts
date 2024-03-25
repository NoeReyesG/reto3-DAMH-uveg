import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { GamesService } from '../../services/games/games.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-display-games',
  templateUrl: './display-games.component.html',
  styleUrl: './display-games.component.scss'
})
export class DisplayGamesComponent implements OnInit, OnChanges{
  @Input() filter:string = "all";
  games: Game[] = [];
  constructor(
    private gamesService: GamesService,
  )
  {}

  ngOnInit(){
    this.games = this.gamesService.getGames('all');
  }

  ngOnChanges(){
    this.games= this.gamesService.getGames(this.filter);
  }


}
