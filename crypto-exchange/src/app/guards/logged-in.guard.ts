import { LoginService } from 'src/app/services/login.service';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const loggedInGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuth = inject(LoginService);
  if (isAuth.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
