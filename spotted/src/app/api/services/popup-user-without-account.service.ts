import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupUserWithoutAccountService {

  private popupUserWithoutAccount = new BehaviorSubject<boolean>(false);
  popupVisibility$ = this.popupUserWithoutAccount.asObservable();

  showPopup() {
    this.popupUserWithoutAccount.next(true);
  }

  hidePopup() {
    this.popupUserWithoutAccount.next(false);
  }
}
