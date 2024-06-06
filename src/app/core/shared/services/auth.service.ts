import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { environments } from './../../environments/environment';
// import jwtDecode from 'jwt-decode';
//update import { jwtDecode } from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';
import { HttpHandlerService } from './http-handler.service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpHandlerService) {
    this.saveUserData();
  }

  userData: BehaviorSubject<any> = new BehaviorSubject(null);

  // Sign UP Api
  signUpApi(obj: object): Observable<any> {
    return this._HttpClient.postRequest(`${environments.authApi}signup`, obj);
  }

  // Sign In Api
  signInApi(obj: object): Observable<any> {
    return this._HttpClient.postRequest(`${environments.authApi}signin`, obj);
  }

    // Sign Out Api
    signOutApi(obj: object): Observable<any> {
      return this._HttpClient.postRequest(`${environments.authApi}signOut`, {
        token: JSON.stringify(localStorage.getItem('uGame')),
      });
      // return this._HttpClient.postRequest(`${environments.authApi}signin`, obj);
    }

  // Save Data User
  saveUserData(): void {
    if (localStorage.getItem('uGame')) {
      const encode: string | null = localStorage.getItem('uGame');
      const decode: any = jwtDecode(encode!);
      this.userData.next(decode);
      console.log(decode);
    }
  }
}
