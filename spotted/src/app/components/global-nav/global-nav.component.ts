import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../api/services/user.service';
@Component({
  selector: 'app-global-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './global-nav.component.html',
  styleUrl: './global-nav.component.scss'
})
export class GlobalNavComponent {
  statePage: number = 0;
  stateNotif: boolean = false;
  stateMessage: boolean = false;
  @Input() user_id!: number;
  vision_menu: boolean = false;
  actualYear: number = new Date().getFullYear();

  constructor(
    private router: Router) {
    }
    
  onCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.vision_menu = true;
    } else {
      this.vision_menu = false;
    }
  }
  ngOnInit() {
    if (this.router.url.includes('home')){
      this.statePage = 1;
    }else if (this.router.url.includes('explore')){
      this.statePage = 2;
    }else if (this.router.url.includes('my_events')){
      this.statePage = 3;
    }

  }

}
