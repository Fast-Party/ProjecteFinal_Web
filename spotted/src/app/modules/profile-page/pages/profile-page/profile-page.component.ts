import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProfileModel } from '../../../../models/profile.model';
import { PlanCardModel } from '../../../../models/plan.model';

import { UserService } from '../../../../api/services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent implements OnInit {
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
  yearsArray: number[] = Array.from({ length: 85 }, (_, i) => new Date().getFullYear() - 16 - i);
  isAgeValid: boolean = true;

  isEditing: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient, private userService: UserService, private fb : FormBuilder) {
    this.perfilUsuario = new ProfileModel();
  }

  ngOnInit(): void {

    this.idUsuario = this.userService.getIdUsuario();
    
    if (this.idUsuario != null) {
      const body = { IdUsuario: this.idUsuario }
      try {
        this.http.post('http://localhost:3000/perfilUsuario', body).pipe(catchError(error => {
          console.log('error is: ', error);
          return error;
        })).subscribe((res: any) => {
          if (res) {
            this.perfilUsuario = res.perfil[0];
            console.log("perfil", this.perfilUsuario);
            this.planesUsuario = res.planes;
            this.nombreUsuarioOnly = this.perfilUsuario.Nombre.split(' ')[0];
            this.apellidosUsuarioOnly = this.perfilUsuario.Nombre.split(' ').slice(1).join(' ');

            this.originalDate = this.perfilUsuario.FechaNacimiento;
            const date = new Date(this.originalDate);
            this.dia = date.getDate();
            this.mes = date.getMonth();

            console.log('mes', this.mes);
            this.year = date.getFullYear();
            console.log('planes', this.perfilUsuario.FechaNacimiento);
          } else {
            console.log('couldnt post plan')
          }
        })
      } catch (error) {
        return console.log('sdfd', error);
      }
    }
  }
}
