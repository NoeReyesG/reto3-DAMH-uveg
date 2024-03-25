import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  @Output() emitFilter = new EventEmitter<string>();
  constructor(
    private router: Router,
  ){}

  onLogOut():void{
    localStorage.clear();
    this.router.navigate(["auth/login"]);
  }

  filterGame(filter:string){
    switch(filter){
      case "all":
        this.emitFilter.emit('all');
        break;
      case "famous":
        this.emitFilter.emit('famous');
        break;
      case "downloaded":
        this.emitFilter.emit('downloaded');
        break;
      case "coming":
        this.emitFilter.emit('coming');
        break;
      default:
        this.emitFilter.emit('all');
    }
  }
}
