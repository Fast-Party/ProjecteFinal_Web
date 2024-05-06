import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterLink],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  registerObj: Register;
  showPassword: boolean = false;
  applyAnimationEye: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.registerObj = new Register();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.applyAnimationEye = true;
}

  onregister() {
    try {
      this.http.post('http://localhost:3000/registrarUsuario', this.registerObj).pipe(catchError(error => {
        console.log('error is: ', error);
        if (error.status === 400) {
          window.alert('There are fields that must be filled')
        }
        return error;
      })).subscribe((res: any) => {
        console.log(res['message']);
        if (res['message'] === "User registered correctly.") {
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

export class Register {
  NombreUsuario: string;
  Nombre: string;
  Contrasenya: string;
  Email: string;
  Telefono: string;
  FechaNacimiento: Date;
  Tipo: Number;
  constructor() {
    this.NombreUsuario = '';
    this.Nombre = '';
    this.Contrasenya = '';
    this.Email = '';
    this.Telefono = '';
    this.FechaNacimiento = new Date();
    this.Tipo = 1;
  }
}
