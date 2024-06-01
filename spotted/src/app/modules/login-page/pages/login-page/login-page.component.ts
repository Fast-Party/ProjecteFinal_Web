import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs';
import { UserService } from '../../../../api/services/user.service';
import { PopupUserWithoutAccountService } from '../../../../api/services/popup-user-without-account.service';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  loginObj: Login;
  prvPss: string;
  showPassword: boolean = false;
  applyAnimationEye: boolean = false;
  notyf = new Notyf({
    duration: 3000,
    position: {
      x: 'right',
      y: 'bottom',
    },
  });

  constructor(
    private http: HttpClient, 
    private router: Router,
    private userService: UserService,
    private popupUserWithoutAccountService: PopupUserWithoutAccountService
  ) {
    this.loginObj = new Login();
    this.prvPss = 'test';
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.applyAnimationEye = true;
  }

  onLogin() {
    try {
      this.http
        .post('http://localhost:3000/login', this.loginObj)
        .pipe(
          catchError((error) => {
            console.log('error is: ', error);
            if (error) {
              window.alert('Conexión fallida');
            }
            return error;
          })
        )
        .subscribe((res: any) => {
          if (res.length > 0) {
            if(this.userService.getIdUsuario() == 0){
              this.popupUserWithoutAccountService.hidePopup();
            }
            this.userService.setIdUsuario(res[0].IdUsuario);
            this.router.navigateByUrl(res[0].IdUsuario + '/home');
            
          } else {
            console.log('Datos incorrectos');
            this.notyf.error('Datos incorrectos');
          }
        });
    } catch (error) {
      return console.log('sdfd');
    }
  }
}

export class Login {
  NombreUsuario: string;
  Contrasenya: string;
  constructor() {
    this.NombreUsuario = '';
    this.Contrasenya = '';
  }
}
