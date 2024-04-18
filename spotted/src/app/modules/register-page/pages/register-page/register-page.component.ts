import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  registerObj: Register;

  constructor(private http: HttpClient, private router: Router) {
    this.registerObj = new Register();
  }

  onregister() {
    try {
      this.http.post('http://localhost:3000/registrarUsuario', this.registerObj).subscribe((res: any) => {
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
