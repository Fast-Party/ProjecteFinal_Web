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
  user_id: string = '';
  vision_menu: boolean = false;
  actualYear: number = new Date().getFullYear();
  constructor(private router: Router) { }

  onCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.vision_menu = true;
    } else {
      this.vision_menu = false;
    }
  }

  ngOnInit() {
    this.user_id = this.router.url.charAt(this.router.url.length - 1);
    
    if (this.router.url.includes('home')){
      this.statePage = 1;
    }else if (this.router.url.includes('explore')){
      this.statePage = 2;
    }else if (this.router.url.includes('my_events')){
      this.statePage = 3;
    }

  }

}
