import { Component, Input, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import {
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { ProfileModel } from '../../models/profile.model';
import { HttpClient } from '@angular/common/http';
import { PopupUserWithoutAccountService } from '../../api/services/popup-user-without-account.service';

@Component({
  selector: 'app-global-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './global-nav.component.html',
  styleUrl: './global-nav.component.scss',
})
export class GlobalNavComponent implements OnInit {
  statePage: number = 0;
  stateNotif: boolean = false;
  stateMessage: boolean = false;
  @Input() user_id!: number;
  vision_menu: boolean = false;
  actualYear: number = new Date().getFullYear();
  perfilUsuario: ProfileModel;

  constructor(private router: Router, private http: HttpClient, private popupUserWithoutAccountService: PopupUserWithoutAccountService) {
    this.perfilUsuario = new ProfileModel();
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
    if (this.user_id == 0) {
      this.perfilUsuario.Imagen = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/1200px-Windows_10_Default_Profile_Picture.svg.png'
    } else {
      console.log('user_id', this.user_id);
      if (this.user_id != null) {
        const body = { IdUsuario: this.user_id };
        try {
          this.http
            .post('http://localhost:3000/getInfoUsuarioLogged', body)
            .pipe(
              catchError((error) => {
                console.log('error is: ', error);
                return error;
              })
            )
            .subscribe((res: any) => {
              if (res) {
                this.perfilUsuario = res.results[0];
              } else {
                console.log('couldnt post plan');
              }
            });
        } catch (error) {
          return console.log('sdfd', error);
        }
      }
    }

    if (this.router.url.includes('for-you') || this.router.url.includes('following')) {
      this.statePage = 1;
    } else if (this.router.url.includes('discover') || this.router.url.includes('trending')) {
      this.statePage = 2;
    } else if (this.router.url.includes('my-events')) {
      this.statePage = 3;
    }
  }

  onClick() {
    if (this.user_id !== 0) {
      this.statePage = 3;
      this.router.navigateByUrl( this.user_id +'/my-events');
    } else {
      this.popupUserWithoutAccountService.showPopup();
    }
  }
}