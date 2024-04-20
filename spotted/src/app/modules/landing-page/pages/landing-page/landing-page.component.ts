import { Component } from '@angular/core';
import { RomboComponent } from '../../../../components/rombo/rombo.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ NavBarComponent ,RomboComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
