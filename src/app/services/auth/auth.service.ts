import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users:User[] =[
    {username: 'Guillermina', password: 'UVEG'},
    {username: 'Noe', password: 'UVEG2'},
  ]

  constructor(
    private router: Router,
  ) {}

  login(user:User):boolean{
    
    let userFound: User | undefined = this.users.find((user1) => user1.username ==  user.username && user1.password == user.password);
    if (userFound){
      localStorage.setItem('isLogged', JSON.stringify(userFound));
      console.log(JSON.stringify(userFound));
      return true;
    }
    else{
      localStorage.clear();
      return false;
    }
  }

  register(newUser:User ):void{
    this.users.push(newUser);
    localStorage.setItem('isLogged', JSON.stringify(newUser));
    this.router.navigate(['home'])
  }
}
