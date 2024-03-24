import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-video-game-form',
  templateUrl: './video-game-form.component.html',
  styleUrl: './video-game-form.component.scss'
})
export class VideoGameFormComponent {

  addGameForm =  new FormGroup({
    title: new FormControl('', Validators.required), 
    rated: new FormControl(Number, Validators.required), 
    description: new FormControl('', Validators.required), 
    releaseDate: new FormControl(Date, Validators.required), 
    downloads: new FormControl(Number), 
    comingSoon: new FormControl(true, Validators.required), 
  })

}
