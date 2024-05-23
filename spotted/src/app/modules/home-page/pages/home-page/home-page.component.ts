import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {

}
