
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';



export const sessionGuard: CanActivateFn = (
  next:ActivatedRouteSnapshot,
  state:RouterStateSnapshot) => {
    const isLogged = localStorage.getItem('isLogged');
    
    if(isLogged){
      return true;
    }else{
      
      return false;
    }
};
