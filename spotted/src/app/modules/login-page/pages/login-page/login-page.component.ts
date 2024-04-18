import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginObj: Login;
  prvPss: string;

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
    this.prvPss = "test";
  }

  onLogin() {
    try {
      this.http.post('http://localhost:3000/login', this.loginObj).subscribe((res: any) => {
        console.log('dsdfsfd'+res.status);
        if (res['isAuthenticated']) {
          this.router.navigateByUrl('/landing-page')
        } else {
          console.log('error 401')
        }
      })
    } catch (error) {
      return console.log('sdfd')
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
