import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/shared/services/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private _AuthService: AuthService,
    private _Router: Router,
    private toastrService: ToastrService
  ) {}

  loginForm: FormGroup = this.fb.group({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\w{3,10}$/),
    ]),
  });

  // Sign Up Form
  setLoginForm(obj: FormGroup): void {
    if (obj.valid)
      this._AuthService.signInApi(obj.value).subscribe({
        next: (response) => {
          console.log(response);
          if (response.message === 'success') {
            console.log('Success');

            localStorage.setItem('uGame', response.token);
            this._AuthService.saveUserData();

            obj.reset();
            // this.toastrService.success('Have fun storming the castle!', 'Miracle Max Says')

            this.toastrService.success('SignIn Successfully', 'Success', {
              timeOut: 3000,
            });
            this._Router.navigate(['/home']);
          } else {
            this.toastrService.error(`${response.message}`, 'Error', {
              timeOut: 3000,
            });
          }
        },
      });
  }
}
