import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { catchError } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProfileModel } from '../../../../models/profile.model';
import { PlanCardModel } from '../../../../models/plan.model';
import { UserService } from '../../../../api/services/user.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent implements OnInit, AfterViewInit {
  UpdateForm!: FormGroup;

  idUsuario?: number;
  perfilUsuario: ProfileModel;
  planesUsuario: PlanCardModel[] = [];
  nombreUsuarioOnly: string = '';
  apellidosUsuarioOnly: string = '';
  originalDate: any;
  dia: number = 0;
  mes: number = 0;
  year: number = 0;

  daysArray: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  yearsArray: number[] = Array.from(
    { length: 85 },
    (_, i) => new Date().getFullYear() - 16 - i
  );
  isAgeValid: boolean = true;

  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private userService: UserService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.perfilUsuario = new ProfileModel();
  }

  ngOnInit(): void {
    this.idUsuario = this.userService.getIdUsuario();

    if (this.idUsuario != null) {
      const body = { IdUsuario: this.idUsuario };
      try {
        this.http
          .post('http://localhost:3000/perfilUsuario', body)
          .pipe(
            catchError((error) => {
              console.log('error is: ', error);
              return error;
            })
          )
          .subscribe((res: any) => {
            if (res) {
              this.perfilUsuario = res.perfil[0];
              this.nombreUsuarioOnly = this.perfilUsuario.Nombre.split(' ')[0];
              this.apellidosUsuarioOnly = this.perfilUsuario.Nombre.split(' ')
                .slice(1)
                .join(' ');

              this.originalDate = this.perfilUsuario.FechaNacimiento;
              const date = new Date(this.originalDate);
              this.dia = date.getDate();
              this.mes = date.getMonth() + 1;
              this.year = date.getFullYear();

              setTimeout(() => {
                this.UpdateForm.patchValue({
                  NombreUsuario: this.perfilUsuario.NombreUsuario,
                  Nombre: this.nombreUsuarioOnly,
                  Apellidos: this.apellidosUsuarioOnly,
                  Email: this.perfilUsuario.Email,
                  Telefono: this.perfilUsuario.Telefono,
                  FechaNacimientoDia: this.dia,
                  FechaNacimientoMes: this.mes,
                  FechaNacimientoAno: this.year,
                });
              });
            } else {
              console.log('couldnt post plan');
            }
          });
      } catch (error) {
        return console.log('sdfd', error);
      }
    }

    this.UpdateForm = this.fb.group({
      NombreUsuario: new FormControl({ value: '', disabled: true }, [
        Validators.required,
        Validators.maxLength(30),
      ]),
      Nombre: new FormControl({ value: '', disabled: true }, [
        Validators.required,
        Validators.maxLength(150),
      ]),
      Apellidos: new FormControl({ value: '', disabled: true }, [
        Validators.required,
        Validators.maxLength(250),
      ]),
      Email: new FormControl({ value: '', disabled: true }, [
        Validators.required,
        Validators.email,
      ]),
      Telefono: new FormControl({ value: '', disabled: true }, [
        Validators.required,
        Validators.pattern('^[0-9]{9}$'),
      ]),
      FechaNacimientoDia: new FormControl({ value: '', disabled: true }, [
        Validators.required,
      ]),
      FechaNacimientoMes: new FormControl({ value: '', disabled: true }, [
        Validators.required,
      ]),
      FechaNacimientoAno: new FormControl({ value: '', disabled: true }, [
        Validators.required,
      ]),
    });
  }

  onUpdateUser(): void {
    this.isAgeValid = this.chekingBornDate();
    if (!this.isAgeValid) {
      return;
    } else {
      this.perfilUsuario.FechaNacimiento!.setHours(+2);
      try {
        this.http
          .post('http://localhost:3000/updatePerfilUsuario', {
            IdUsuario: this.idUsuario,
            Nombre: this.UpdateForm.get('Nombre')?.value + ' ' + this.UpdateForm.get('Apellidos')?.value,
            Email: this.UpdateForm.get('Email')?.value,
            Telefono: this.UpdateForm.get('Telefono')?.value,
            FechaNacimiento: this.perfilUsuario.FechaNacimiento,
            NombreUsuario: this.UpdateForm.get('NombreUsuario')?.value,
          })
          .pipe(
            catchError((error) => {
              console.log('error is: ', error);
              return error;
            })
          )
          .subscribe((res: any) => {
            if (res) {
              console.log('perfil', res);
              
            } else {
              console.log('couldnt post plan');
            }
          });
      } catch (error) { 
        return console.log('sdfd', error);
      }
      this.disableInputs();
    }
  }

  chekingBornDate(): boolean {
    const bornDate = new Date(
      this.UpdateForm.get('FechaNacimientoAno')?.value,
      this.UpdateForm.get('FechaNacimientoMes')?.value - 1,
      this.UpdateForm.get('FechaNacimientoDia')?.value
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
      this.UpdateForm.get('FechaNacimientoDia')?.setErrors({ invalid: true });
      return false;
    }
    this.perfilUsuario.FechaNacimiento = bornDate;
    return true;
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  enableInputs() {
    this.isEditing = true;
    this.UpdateForm.get('Nombre')?.enable();
    this.UpdateForm.get('Apellidos')?.enable();
    this.UpdateForm.get('Email')?.enable();
    this.UpdateForm.get('Telefono')?.enable();
    this.UpdateForm.get('FechaNacimientoDia')?.enable();
    this.UpdateForm.get('FechaNacimientoMes')?.enable();
    this.UpdateForm.get('FechaNacimientoAno')?.enable();
    this.UpdateForm.get('NombreUsuario')?.enable();
    this.cdr.detectChanges();
  }

  disableInputs() {
    this.isEditing = false;
    this.UpdateForm.get('Nombre')?.disable();
    this.UpdateForm.get('Apellidos')?.disable();
    this.UpdateForm.get('Email')?.disable();
    this.UpdateForm.get('Telefono')?.disable();
    this.UpdateForm.get('FechaNacimientoDia')?.disable();
    this.UpdateForm.get('FechaNacimientoMes')?.disable();
    this.UpdateForm.get('FechaNacimientoAno')?.disable();
    this.UpdateForm.get('NombreUsuario')?.disable();
    this.cdr.detectChanges();
  }
}
