import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RomboComponent } from '../../../../components/rombo/rombo.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavBarComponent, RomboComponent, FooterComponent, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  activeIndex: number = 0;
  applyAnimation: boolean = false;
  @ViewChild('romboRight') romboRight!: ElementRef;
  @ViewChild('romboLeft') romboLeft!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Se queda todo el rato cargando la web
    //this.startInterval();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target) {
            case this.romboRight.nativeElement:
              const romboRight = document.querySelector('.romboFI-right');
              romboRight?.classList.add('romboFI-right-reveal');
              break;
            case this.romboLeft.nativeElement:
              const romboLeft = document.querySelector('.romboFI-left');
              romboLeft?.classList.add('romboFI-left-reveal');
              break;
          }
        }
      });
    });

    observer.observe(this.romboRight.nativeElement);
    observer.observe(this.romboLeft.nativeElement);

    const observerCFI = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('cont-text-appear');
        }
      });
    });

    const viewbox = document.querySelectorAll('.content-find-inter');
    viewbox.forEach((cfi) => {
      observerCFI.observe(cfi);
    });
  }

  /*
  startInterval(): void {
    setInterval(() => {
     // const newIndex = (this.activeIndex + 1) % this.wrdStrgArray.length;
      //this.changeSlide(newIndex);
    }, 5000);
  }
*/

  changeSlide(index: number) {
    if (index != this.activeIndex) {
      this.applyAnimation = true;
      setTimeout(() => {
        this.applyAnimation = false;
      }, 500);
    }
    this.activeIndex = index;
    this.wrd = this.wrdStrgArray[index];
    this.prg = this.prgStrgArray[index];
    this.imgs = this.imgsArray[index];
  }

  wrdStrgArray = ['aventuras', 'amigos', 'hobbies'];
  wrd = this.wrdStrgArray[0];

  prgStrgArray = [
    'Nuestra aplicación de organización de planes facilita la coordinación de eventos con una interfaz intuitiva y herramientas de comunicación fluida. Además, nuestra comunidad activa permite descubrir nuevas experiencias y conectar con personas afines para planificar juntos.',
    'Con Spotted, puedes encontrar a tus amigos y familiares en un solo lugar, manteniendo un historial de eventos compartidos y creando recuerdos inolvidables. Nuestra aplicación te permite compartir fotos, videos y comentarios para revivir esos momentos especiales.',
    'Spotted es la plataforma ideal para organizar tus hobbies y actividades favoritas. Puedes unirte a grupos de interés, descubrir eventos cercanos y planificar salidas con personas que comparten tus pasiones. ¡Con Spotted, nunca más te perderás una oportunidad de disfrutar de tus hobbies!',
  ];

  prg = this.prgStrgArray[0];

  imgsArray = [
    {
      img_src_TL:
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src_TR:
        'https://images.unsplash.com/photo-1536909526839-8f10e29ba80c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src_BL:
        'https://images.unsplash.com/photo-1581173674215-691f05495866?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src_BR:
        'https://images.unsplash.com/photo-1592753054398-9fa298d40e85?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      img_src_TL:
        'https://images.unsplash.com/photo-1496843916299-590492c751f4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src_TR:
        'https://images.unsplash.com/photo-1519111887837-a48ccf9edc00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src_BL:
        'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src_BR:
        'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      img_src_TL:
        'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src_TR:
        'https://images.unsplash.com/photo-1574879948818-1cfda7aa5b1a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src_BL:
        'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src_BR:
        'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  imgs = this.imgsArray[0];
}
