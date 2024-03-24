import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: '../login.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit{

  constructor(
    private authService: AuthService,
    private router: Router,
  ){}

  loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
  })


  ngOnInit(): void {
    
  }

  login():void{
    if (!this.loginForm.valid){
      return;
    }

    console.log('login1');
    let values = this.loginForm.value;
    const user = new User(String(values.username), String(values.password))
    console.log(this.authService.login(user));
    if (this.authService.login(user)){
      console.log("Entro a la sesión");
      this.router.navigateByUrl('home');
    }
  }



}
