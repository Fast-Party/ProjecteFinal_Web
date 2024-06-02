import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { GlobalNavComponent } from '../../components/global-nav/global-nav.component';
import { GlobalFooterComponent } from '../../components/global-footer/global-footer.component';
import { HomePageComponent } from '../home-page/pages/home-page/home-page.component';
import { UserService } from '../../api/services/user.service';
import { PopupWithoutAccountComponent } from '../../components/popup-without-account/popup-without-account.component';
import { PopupUserWithoutAccountService } from '../../api/services/popup-user-without-account.service';
@Component({
  selector: 'app-app-content',
  standalone: true,
  imports: [GlobalFooterComponent, GlobalNavComponent,  RouterOutlet,  HomePageComponent, PopupWithoutAccountComponent],
  templateUrl: './app-content.component.html',
  styleUrl: './app-content.component.scss'
})
export class AppContentComponent implements OnInit {
  user_id!: number;
  isVisiblePopup = false;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private popupWithoutAcc: PopupUserWithoutAccountService
  ) { }

  async ngOnInit() {
    this.user_id = parseInt(this.route.snapshot.paramMap.get('idUsuario')!);
    this.userService.setIdUsuario(this.user_id);

    this.popupWithoutAcc.popupVisibility$.subscribe((value) => {
      this.isVisiblePopup = value;
    });
  }

}
