import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalNavComponent } from '../../components/global-nav/global-nav.component';
import { GlobalFooterComponent } from '../../components/global-footer/global-footer.component';

@Component({
  selector: 'app-app-content',
  standalone: true,
  imports: [GlobalFooterComponent, GlobalNavComponent,  RouterOutlet],
  templateUrl: './app-content.component.html',
  styleUrl: './app-content.component.scss'
})
export class AppContentComponent {

}
