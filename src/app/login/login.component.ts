import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService, private _Router:Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._AuthService.userData.subscribe({
      next:()=>{
        if (this._AuthService.userData.getValue() != null) {
          this._Router.navigate(['/home']);
        }
      }
    });
  }
  error:string = '';
  isLoading:boolean = false;
  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null, [Validators.required, Validators.pattern(/^[A-z]/)]),
  });

  submitLoginForm(loginForm:any){
    this.isLoading = true;
    console.log(loginForm.value);
    console.log('loginForm.value');
    this._AuthService.signin(loginForm.value).subscribe({
      next:(response) => {
        this.isLoading = false;
        if (response.message === "success") {
          console.log(response);
          console.log('response');
          console.log(response.message);
          console.log('response.message');
          localStorage.setItem("userToken", response.token)
          this._AuthService.saveUserData();
          //Navigate home|login
          this._Router.navigate(['/home']);

        }else{
          this.error = response.message;
          console.log(response);
          console.log(response.message);
          console.log('error response.message');
        }
      }
    })

  }
}
