import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-global-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './global-nav.component.html',
  styleUrl: './global-nav.component.scss'
})
export class GlobalNavComponent {
  statePage: number = 0;
  stateNotif: boolean = false;
  stateMessage: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
    
    if (this.router.url.includes('home')){
      this.statePage = 1;
    }else if (this.router.url.includes('explore')){
      this.statePage = 2;
    }else if (this.router.url.includes('my_events')){
      this.statePage = 3;
    }

  }

}
