import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  RegisterForm!: FormGroup;
  registerObj: Register;
  showPassword: boolean = false;
  applyAnimationEye: boolean = false;
  applyDelay: boolean = false;
  nextForm: boolean = false;
  constructor(
    private http: HttpClient, 
    private router: Router,
    private fb : FormBuilder
  
  ) {
    this.registerObj = new Register();
  }

  ngOnInit(): void {
   this.RegisterForm = this.fb.group({
    NombreUsuario: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    Email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    Contrasenya: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
    ]),
    RepetirContrasenya: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
   });
  }

  /*
  comparePasswords(password : FormControl) {
    return password.value === this.registerObj.Contrasenya
      ? null
      : { notSame: true };
  }  
*/

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.applyAnimationEye = true;
  }

  gestionBoton() {
    this.applyAnimationEye = false;
    this.applyDelay = true;
    if (!this.nextForm) {
      this.nextForm = !this.nextForm;
    } else {
      this.onregister();
    }
  }

  onregister() {
    try {
      this.http
        .post('http://localhost:3000/registrarUsuario', this.registerObj)
        .pipe(
          catchError((error) => {
            console.log('error is: ', error);
            if (error.status === 400) {
              window.alert('There are fields that must be filled');
            }
            return error;
          })
        )
        .subscribe((res: any) => {
          console.log(res['message']);
          if (res['message'] === 'User registered correctly.') {
            this.router.navigateByUrl('/landing-page');
          } else {
            console.log('error 401');
          }
        });
    } catch (error) {
      return console.log('sdfd');
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
