import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../../../views/footer/footer.component';
import { NavbarComponent } from '../../../../views/navbar/navbar.component';

@Component({
  selector: 'app-layot-auth',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './layot-auth.component.html',
  styleUrls: ['./layot-auth.component.scss']
})
export class LayotAuthComponent {

}
