import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { sessionGuard } from '../guards/session/session.guard';
import { VideoGameFormComponent } from './video-game-form/video-game-form.component';

const routes: Routes = [
  {path:'', component:HomeComponent, canActivate:[sessionGuard]},
  {path:'add-game', component:VideoGameFormComponent, canActivate:[sessionGuard]},
  {path:'**', component:VideoGameFormComponent, canActivate:[sessionGuard], redirectTo:''},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
