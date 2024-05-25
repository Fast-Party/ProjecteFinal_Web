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

  wrdStrgArray = ['fiesta', 'comunidad', 'novedades'];
  wrd = this.wrdStrgArray[0];

  prgStrgArray = [
    '¿No conoces como es Barcelona de noche?<br> Deja que te lo enseñemos.<br><br> En Fast Party podrás encontrar diferentes planes para todos los gustos, ya que nos basamos en los intereses de cada usuario para las recomendaciones.<br><br> A través del mapa podrás encontrar los planes más cercanos a ti',
    'Fast Party no es solamente fiesta, sino también comunidad.<br><br> Podrás conocer a gente nueva con tus mismos gustos e intereses, chatear a través de la web o app y saber cuáles de tus amigos acuden a las diferentes fiestas.',
    '¿Conoces el término FOMO?<br> “Fear of missing out” o “Miedo a perderse algo” <br><br>FOMO es lo que sienten las personas que no conocen las novedades gracias a Fast Party. Acude a las fiestas más buscadas de la ciudad y entérate el primero para no quedare sin tu entrada.',
  ];

  prg = this.prgStrgArray[0];

  imgsArray = [
    {
      img_src_TL:
        'https://images.unsplash.com/photo-1576419840119-bddd76d62bbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src_TR:
        'https://images.unsplash.com/photo-1569858268984-d3e1fbb1455b?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src_BL:
        'https://images.unsplash.com/photo-1586105449897-20b5efeb3233?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src_BR:
        'https://images.unsplash.com/photo-1544785349-c4a5301826fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      img_src_TL:
        'https://images.unsplash.com/photo-1562066197-ee227ba3f502?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src_TR:
        'https://images.unsplash.com/photo-1630163670776-0f64ec1acf1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src_BL:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src_BR:
        'https://images.unsplash.com/photo-1583244532610-2a234e7c3eca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      img_src_TL:
        'https://images.unsplash.com/photo-1521478413868-1bbd982fa4a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src_TR:
        'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src_BL:
        'https://images.unsplash.com/photo-1486556396467-d83d2b23514b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src_BR:
        'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  imgs = this.imgsArray[0];
}
