import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../../../views/footer/footer.component';
import { NavbarComponent } from '../../../../views/navbar/navbar.component';


@Component({
  selector: 'app-layot-blank',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './layot-blank.component.html',
  styleUrls: ['./layot-blank.component.scss']
})
export class LayotBlankComponent {

}
