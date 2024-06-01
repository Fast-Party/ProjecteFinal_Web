import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PopupUserWithoutAccountService } from '../../api/services/popup-user-without-account.service';
@Component({
  selector: 'app-popup-without-account',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './popup-without-account.component.html',
  styleUrl: './popup-without-account.component.scss'
})
export class PopupWithoutAccountComponent {


  constructor(
    private popupService: PopupUserWithoutAccountService
  ) { }

  ngOnInit() {
  }

  closePopup() {
    this.popupService.hidePopup();
  }
}
