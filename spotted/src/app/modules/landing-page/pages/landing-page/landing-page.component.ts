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

  wrdStrgArray = ['aventuras','amigos','hobbies'];
  wrd = this.wrdStrgArray[0];

  prgStrgArray = [
  'Nuestra aplicación de organización de planes facilita la coordinación de eventos con una interfaz intuitiva y herramientas de comunicación fluida. Además, nuestra comunidad activa permite descubrir nuevas experiencias y conectar con personas afines para planificar juntos.',
  'comparte',
  'disfruta'
];

prg = this.prgStrgArray[0];

}
