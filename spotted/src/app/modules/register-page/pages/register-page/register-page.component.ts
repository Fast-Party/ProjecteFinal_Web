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

  daysArray: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  yearsArray: number[] = Array.from({ length: 85 }, (_, i) => new Date().getFullYear() - 16 - i);
  isAgeValid: boolean = true;

  repetirContrasenya: string = '';
  samePassword: boolean = false;

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
      Validators.pattern('^(?=(?:.*[a-zA-Z]))(?=(?:.*[0-9]))|(?=(?:.*[a-zA-Z]))(?=(?:.*[^a-zA-Z0-9]))|(?=(?:.*[0-9]))(?=(?:.*[^a-zA-Z0-9])).{8,}$')
    ]),
    RepetirContrasenya: new FormControl('', [
      Validators.required,
    ]),
    Nombre: new FormControl('', [
      Validators.required,
      Validators.maxLength(150),
    ]),
    Apellidos: new FormControl('', [
      Validators.required,
      Validators.maxLength(250),
    ]),
    Telefono: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{9}$')
    ]),
    FechaNacimientoDia: new FormControl('', [
      Validators.required,
    ]),
    FechaNacimientoMes: new FormControl('', [
      Validators.required,
    ]),
    FechaNacimientoAno: new FormControl('', [
      Validators.required,
    ]),
   });
   
  }

  comparePasswords() {
    this.samePassword = this.repetirContrasenya === this.registerObj.Contrasenya;
  }  

  chekingBornDate() : boolean{
    const bornDate = new Date(
      this.RegisterForm.get('FechaNacimientoAno')?.value,
      (this.RegisterForm.get('FechaNacimientoMes')?.value - 1),
      this.RegisterForm.get('FechaNacimientoDia')?.value
    ); 

    // Obtenemos la fecha actual
    const today = new Date();

    // Calculamos la diferencia de años
    let age = today.getFullYear() - bornDate.getFullYear();
    const m = today.getMonth() - bornDate.getMonth();
    const d = today.getDate() - bornDate.getDate();

    if (m < 0 || (m === 0 && d < 0)) {
      age--;
    }

    if (age < 16) {
      this.RegisterForm.get('FechaNacimientoDia')?.setErrors({ invalid: true });
      return false;
    }

    this.registerObj.FechaNacimiento = bornDate;
    return true;

  }


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
      this.isAgeValid = this.chekingBornDate();
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
            this.router.navigateByUrl('/login');
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
  Apellidos: string;
  Contrasenya: string;
  Email: string;
  Telefono: string;
  FechaNacimiento: Date;
  Tipo: Number;
  constructor() {
    this.NombreUsuario = '';
    this.Nombre = '';
    this.Apellidos = '';
    this.Contrasenya = '';
    this.Email = '';
    this.Telefono = '';
    this.FechaNacimiento = new Date();
    this.Tipo = 1;
  }
}
