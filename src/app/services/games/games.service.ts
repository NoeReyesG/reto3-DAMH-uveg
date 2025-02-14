import { Injectable } from '@angular/core';
import { Game } from '../../models/game';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
//Creo que comentaré por todo el código que esta tarea para media semana, para alguien que aprende Angular desde cero, es 
//algo totalmente desproporcionado.
export class GamesService {
  games: Game[]=[
    {
      title:'Red of Redemption II',
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel turpis vitae justo luctus congue vitae et lorem. Fusce ut nibh ac velit pharetra maximus sit amet non urna. Suspendisse eget libero sit amet metus mattis ultricies at eget quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      img:'../../assets/red.jpg',
      releasedDate: new Date("12/09/2014"),
      downloads:192617,
      rated: 9.2,
      comingSoon: false
    },
    {
      title:'Super Mario Bros 3',
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel turpis vitae justo luctus congue vitae et lorem. Fusce ut nibh ac velit pharetra maximus sit amet non urna. Suspendisse eget libero sit amet metus mattis ultricies at eget quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      img:'../../assets/mario.jpg',
      releasedDate: new Date("11/03/1992"),
      downloads:19187277,
      rated: 8.6,
      comingSoon: false
    },
    {
      title:'Red of Redemption III',
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel turpis vitae justo luctus congue vitae et lorem. Fusce ut nibh ac velit pharetra maximus sit amet non urna. Suspendisse eget libero sit amet metus mattis ultricies at eget quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      img:'../../assets/red3.jpg',
      releasedDate: new Date("03/25/2024"),
      downloads:0,
      rated: 0,
      comingSoon: true
    },
    {
      title:'Halo IV',
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel turpis vitae justo luctus congue vitae et lorem. Fusce ut nibh ac velit pharetra maximus sit amet non urna. Suspendisse eget libero sit amet metus mattis ultricies at eget quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      img:'../../assets/halo.jpg',
      releasedDate: new Date("02/25/2026"),
      downloads:0,
      rated: 0,
      comingSoon: true
    },
  ]

  constructor(
    private snackBar: MatSnackBar,
  ) { }
  addGame(game:Game): void{
    console.log(game);
    this.games.unshift(game);
    this.snackBar.open("Videojuego agregado correctamente", "Cerrar")

  }

  getGames(filter:string): Game[] {
    switch(filter){
      case "all":
        return this.games;
      case "famous":
        return this.games.filter((game:Game)=> game.rated > 4);
      case "downloaded":
        return this.games.filter((game:Game) => game.downloads > 100);
      case "coming":
        return this.games.filter((game:Game) => game.comingSoon == true);
      default:
        return this.games;
    }
  }
}
