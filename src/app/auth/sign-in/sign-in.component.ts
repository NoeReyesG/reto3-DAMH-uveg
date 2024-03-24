import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: '../login.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SignInComponent {


  errorMessage: string = '';
  signUpForm = new FormGroup({
    username: new FormControl('', Validators.required), 
    password: new FormControl('', Validators.required), 
    confirm: new FormControl('', Validators.required), 
  })

  constructor(
    private authService: AuthService,
  )
  {}
  signUp(): void{

    if (!this.signUpForm.valid){
      return
    }
    
    if (this.signUpForm.controls.password.value == this.signUpForm.controls.confirm.value){
        let values = this.signUpForm.value;
        console.log(values);
        let user: User = new User(String(values.username), String(values.password));
        this.authService.register(user);
    } else{
      this.errorMessage = "Las contraseñas no son iguales";
    }

  }

}
