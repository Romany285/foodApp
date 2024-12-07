import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/Services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let _AuthService = inject(AuthService)
  let _Router = inject(Router)
  if(localStorage.getItem('userToken') != null){
    return true;
  }
  else{
    _Router.navigate(['/auth'])
    return false;
  }

};
