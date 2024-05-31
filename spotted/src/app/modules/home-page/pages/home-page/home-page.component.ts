import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '../../../../api/services/user.service';
import { PopupUserWithoutAccountService } from '../../../../api/services/popup-user-without-account.service';
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
  constructor(
    private router: Router,
    private userService: UserService,
    private popupUserWithoutAccountService: PopupUserWithoutAccountService
  ) { }

  onClick() {
    if (this.userService.getIdUsuario() !== 0) {
      this.router.navigateByUrl( this.userService.getIdUsuario() +'/home/following');
    } else {
      this.popupUserWithoutAccountService.showPopup();
    }
  }
}
