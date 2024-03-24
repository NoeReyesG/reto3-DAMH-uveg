import { Injectable } from '@angular/core';
import { Game } from '../../models/game';

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
      img:'../../assets/game.jpg',
      releasedDate: new Date("12/09/2014"),
      downloads:192617,
      rated: 9.2,
      comingSoon: false
    },
    {
      title:'Super Mario Bros 3',
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel turpis vitae justo luctus congue vitae et lorem. Fusce ut nibh ac velit pharetra maximus sit amet non urna. Suspendisse eget libero sit amet metus mattis ultricies at eget quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      img:'../../assets/game.jpg',
      releasedDate: new Date("11/03/1992"),
      downloads:19187277,
      rated: 8.6,
      comingSoon: false
    },
    {
      title:'Red of Redemption III',
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel turpis vitae justo luctus congue vitae et lorem. Fusce ut nibh ac velit pharetra maximus sit amet non urna. Suspendisse eget libero sit amet metus mattis ultricies at eget quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      img:'../../assets/game.jpg',
      releasedDate: new Date("25/03/2024"),
      downloads:0,
      rated: 0,
      comingSoon: true
    },
    {
      title:'Halo IV',
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel turpis vitae justo luctus congue vitae et lorem. Fusce ut nibh ac velit pharetra maximus sit amet non urna. Suspendisse eget libero sit amet metus mattis ultricies at eget quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      img:'../../assets/game.jpg',
      releasedDate: new Date("25/02/2026"),
      downloads:0,
      rated: 0,
      comingSoon: true
    },
  ]

  constructor() { }
  addGame(game:Game): void{
    console.log(game);

  }

  getGames(): Game[] {
    return this.games;
  } 
}
