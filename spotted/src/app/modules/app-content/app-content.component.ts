import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalNavComponent } from '../../components/global-nav/global-nav.component';
import { GlobalFooterComponent } from '../../components/global-footer/global-footer.component';
import { HomePageComponent } from '../home-page/pages/home-page/home-page.component';
@Component({
  selector: 'app-app-content',
  standalone: true,
  imports: [GlobalFooterComponent, GlobalNavComponent,  RouterOutlet,  HomePageComponent],
  templateUrl: './app-content.component.html',
  styleUrl: './app-content.component.scss'
})
export class AppContentComponent {

}
