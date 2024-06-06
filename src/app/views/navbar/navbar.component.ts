import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/shared/services/auth.service';
import { environments } from '../../core/environments/environment';
import { IsloginDirective } from '../../core/directive/islogin.directive';
import { NotloginDirective } from '../../core/directive/notlogin.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, IsloginDirective, NotloginDirective],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    private _AuthService: AuthService,
    private _Router: Router
  ) {}
  @ViewChild('navbar') navbar!: ElementRef;

  @HostListener('window:scroll')
  onScroll() {
    if (scrollY > 0) {
      this.navbar.nativeElement.classList.add('fixed-top');
    } else {
      this.navbar.nativeElement.classList.remove('fixed-top');
    }
  }

  signOut(): void {
    this._AuthService.signOutApi({
      token: JSON.stringify(localStorage.getItem('uGame')),
    });
    // this._HttpClient.post(`${environments.authApi}signOut`, {
    //   token: JSON.stringify(localStorage.getItem('uGame')),
    // });
    this._AuthService.userData.next(null);
    localStorage.removeItem('uGame');
    this._Router.navigate(['/auth']);
  }
}
