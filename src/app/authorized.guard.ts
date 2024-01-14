import { CanActivateFn } from '@angular/router';

export const authorizedGuard: CanActivateFn = (route, state) => {
  return true;
};

// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { AuthService } from './auth.service';
// import { Observable } from 'rxjs';

// // export const authorizedGuard: CanActivateFn = (route, state) => {
// //   return true;
// // };

// @Injectable({
//   providedIn: 'root'
// })
// export class authorizedGuard implements CanActivateFn {
//   constructor(private auth: AuthService, private route: Router){}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
//       if(this.auth.isAuth == true){
//       return true;
//     }
//     this.route.navigate(['login']);
//     return false;
//   }
// }