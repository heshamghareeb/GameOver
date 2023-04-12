import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,  private _Router:Router) {
    if (localStorage.getItem("userToken") != null) {
      this.saveUserData();
    }
  };
  userData:any = new BehaviorSubject(null);

  saveUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem("userToken"));
    console.log(encodedToken);
    console.log("encodedToken");
    let decodedToken:any = jwtDecode(encodedToken);
    console.log(decodedToken);
    console.log("decodedToken");
    this.userData.next(decodedToken);
  };

  signup(userData:object):Observable<any>{
    return this._HttpClient.post('https://sticky-note-fe.vercel.app/signup/', userData);
  }

  signin(userData:object):Observable<any>{
    return this._HttpClient.post('https://sticky-note-fe.vercel.app/signin/', userData);
  }

  signOut(){
    localStorage.removeItem("userToken");
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
}


