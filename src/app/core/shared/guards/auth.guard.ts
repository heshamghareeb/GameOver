import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// export const authGuard: CanActivateFn = (route, state) => {
//   console.log('test1: auth');

//   const _Router = inject(Router);
//   const _AuthService = inject(AuthService);
//         // const token = localStorage.getItem('token');
//       // return token ? true : false; == return !!token
//       // return !!token;
//       console.log(_AuthService.userData.getValue(),'_AuthService.userData.getValue()');

//       if (localStorage.getItem('uGame')) {
//         const token = localStorage.getItem('uGame');
//         // return token ? true : false; == return !!token
//         // return !!token;
//         return true;
//       } else {
//         console.log('false');

//         _Router.navigate(['/home']);
//         return false;
//       }
// };

export const authGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);

  if (localStorage.getItem('uGame')) {
    return true;
  } else {
    _Router.navigate(['/auth']);
    return false;
  }
};



// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private _AuthService: AuthService, private _Router: Router) {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {

//     if (this._AuthService.userData.getValue()) {
//       return true;
//     } else {
//       this._Router.navigate(['/home']);
//       return false;
//     }
//   }

// }

// @Injectable({ providedIn: 'root' })
// export class AuthGuard2 implements CanActivate {
//   constructor(private _AuthService: AuthService, private _Router: Router) {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {

//     if (this._AuthService.userData.getValue()) {
//       this._Router.navigate(['/home']);
//       return false;
//     } else {
//       return true;
//     }
//   }

// }


