import { Component } from '@angular/core';
import { AuthService } from './../auth.service';
import {FormGroup, FormControl, Validators} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService, private _Router:Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  
  error:string = '';
  isLoading:boolean = false;
  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    last_name:new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    age:new FormControl(null, [Validators.min(3), Validators.max(90), Validators.required]),
    email:new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null, [Validators.required, Validators.pattern(/^[A-z]/)]),
  });

  submitRegisterForm(registerForm:FormGroup){
    this.isLoading = true;
    console.log(registerForm.value);
    console.log('registerForm.value');
    this._AuthService.signup(registerForm.value).subscribe({
      next:(response) => {
        this.isLoading = false;
        if (response.message === "success") {
          //Navigate home|login
          this._Router.navigate(['/login']);
          console.log(response.message);
          console.log('response.message');

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
