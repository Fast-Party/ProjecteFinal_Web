import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-explore-page',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.scss'
})

export class ExplorePageComponent {
  
}
