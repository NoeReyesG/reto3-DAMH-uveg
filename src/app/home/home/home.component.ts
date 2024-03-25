import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  filter: string="all";
  constructor(
    private router: Router,
  ){}

  onLogOut():void{
    localStorage.clear();
    this.router.navigate(["auth/login"]);
  }

  passFilter(filter:string){
    this.filter = filter;
  }

}
