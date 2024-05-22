import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  reload() {
   // window.scrollTo(0, 0);
    window.location.reload();
  }

}
