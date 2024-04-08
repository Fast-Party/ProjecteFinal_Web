import { Component } from '@angular/core';
import { RomboComponent } from '../../../../components/rombo/rombo.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RomboComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
