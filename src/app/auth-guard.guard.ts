import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuardGuard: 
CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = new Router();
  if (!sessionStorage.getItem("Username") || !sessionStorage.getItem("Password")) {
    router.navigate(['/login']);
    return false;
  } else {
     return true;
  }
};