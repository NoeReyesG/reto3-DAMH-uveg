import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GamesService } from '../../services/games/games.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Game } from '../../models/game';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-video-game-form',
  templateUrl: './video-game-form.component.html',
  styleUrl: './video-game-form.component.scss'
})
export class VideoGameFormComponent {

  addGameForm =  new FormGroup({
    title: new FormControl('', Validators.required), 
    rated: new FormControl(undefined, Validators.required), 
    description: new FormControl('', Validators.required), 
    releaseDate: new FormControl(Date, Validators.required), 
    downloads: new FormControl(0), 
    comingSoon: new FormControl(true, Validators.required), 
  })
  

  constructor(
    private gamesService: GamesService,
    private snackBar: MatSnackBar,
  ){}

  onSubmit():void{
    if (!this.addGameForm.valid){
      this.addGameForm.markAllAsTouched;
      this.snackBar.open("Datos Incorrectos, verifique", "Cerrar")
      return;
    }
    const gameValues = this.addGameForm.getRawValue();
    console.log(gameValues);
    const date:string = gameValues.releaseDate?.toString() ?? "00/00/00";
    const game: Game = {
        title: gameValues.title ?? '',
        description: gameValues.description ?? '',
        img:'../../assets/game.jpg',
        releasedDate: new Date(date),
        downloads: gameValues.downloads ?? 0,
        comingSoon: gameValues.comingSoon ?? false,
        rated: gameValues.rated ?? 0,
    }
    this.gamesService.addGame(game);
  }

}
