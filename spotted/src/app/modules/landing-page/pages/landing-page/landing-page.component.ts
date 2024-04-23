import { Component } from '@angular/core';
import { RomboComponent } from '../../../../components/rombo/rombo.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavBarComponent, RomboComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  activeIndex: number = 0;

  changeSlide(index: number) {
    this.activeIndex = index;
    this.wrd = this.wrdStrgArray[index];
    this.prg = this.prgStrgArray[index];
  }

  wrdStrgArray = ['aventuras', 'amigos', 'hobbies'];
  wrd = this.wrdStrgArray[0];

  prgStrgArray = [
    'Nuestra aplicación de organización de planes facilita la coordinación de eventos con una interfaz intuitiva y herramientas de comunicación fluida. Además, nuestra comunidad activa permite descubrir nuevas experiencias y conectar con personas afines para planificar juntos.',
    'comparte',
    'disfruta',
  ];

  prg = this.prgStrgArray[0];

  imgsArray = [
    {
      'img-src-TL':
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'img-src-TR':
        'https://images.unsplash.com/photo-1536909526839-8f10e29ba80c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'img-src-BL':
        'https://images.unsplash.com/photo-1581173674215-691f05495866?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'img-src-BR':
        'https://images.unsplash.com/photo-1592753054398-9fa298d40e85?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      'img-src-TL':
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'img-src-TR':
        'https://images.unsplash.com/photo-1536909526839-8f10e29ba80c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'img-src-BL':
        'https://images.unsplash.com/photo-1581173674215-691f05495866?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'img-src-BR':
        'https://images.unsplash.com/photo-1592753054398-9fa298d40e85?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      'img-src-TL':
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'img-src-TR':
        'https://images.unsplash.com/photo-1536909526839-8f10e29ba80c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'img-src-BL':
        'https://images.unsplash.com/photo-1581173674215-691f05495866?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'img-src-BR':
        'https://images.unsplash.com/photo-1592753054398-9fa298d40e85?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  img = this.imgsArray[0];
}
