import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PlanScreenModel } from '../../../models/plan.model';
import { UserService } from '../../../api/services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plan-page',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './plan-page.component.html',
  styleUrl: './plan-page.component.scss',
})
export class PlanPageComponent implements OnInit {
  idPlan?: number;
  plan: PlanScreenModel;
  idUsuario?: number;
  imagenesEvento: any[] = [];
  eventoImagenPortada?: string;
  userJoined!: boolean;

  //FECHA
  originalDate: any;
  diaSemana: string = '';
  dia: number = 0;
  mes: string = '';
  year: number = 0;
  hora: number = 0;
  minutos: number = 0;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private userService: UserService
  ) {
    this.plan = new PlanScreenModel();
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    

    this.idUsuario = this.userService.getIdUsuario();
    try {
      this.idPlan = parseInt(this.route.snapshot.paramMap.get('idPlan')!);
    } catch (error) {
      console.log(error);
    }

    if (this.idPlan != null) {
      const body = { IdPlan: this.idPlan, IdUsuario: this.idUsuario };
      try {
        this.http
          .post('http://localhost:3000/getPlanById', body)
          .pipe(
            catchError((error) => {
              console.log('error is: ', error);
              return error;
            })
          )
          .subscribe((res: any) => {
            if (res) {
              this.plan = res.results[0];
              console.log('plan', this.plan);
              if (this.plan.Imagenes) {
                this.imagenesEvento = JSON.parse(this.plan.Imagenes);
              }
              this.eventoImagenPortada = this.imagenesEvento.find(
                (imagen: any) => imagen.Orden === 1
              )?.Ruta;

              this.originalDate = this.plan?.Fecha;
              const date = new Date(this.originalDate);
              this.diaSemana = new Intl.DateTimeFormat('es-ES', {
                weekday: 'long',
              }).format(date);
              this.dia = date.getDate();
              this.mes = new Intl.DateTimeFormat('es-ES', {
                month: 'long',
              }).format(date);
              this.year = date.getFullYear();
              this.hora = date.getHours();
              this.minutos = date.getMinutes();

              if(this.plan.IdEstado == null){
                console.log('no hay estado');
                this.userJoined = false;
              }else{
                console.log('hay estado');
                this.userJoined = true;
              }
            } else {
              console.log('couldnt get plan');
            }
          });
      } catch (error) {
        return console.log('sdfd', error);
      }
    }
  }

  refactorNumberDate(numero: number): string {
    if (numero < 10) {
      return '0' + numero;
    } else {
      return numero.toString();
    }
  }

  handleJoinButton(): void {
    if (this.idPlan != null) {
      const body = {
        IdUsuario: this.idUsuario,
        IdPlan: this.idPlan,
        Privado: false,
      };
      console.log(body);
      try {
        this.http
          .post('http://localhost:3000/unirseAPlan', body)
          .pipe(
            catchError((error) => {
              console.log('error is: ', error);
              return error;
            })
          )
          .subscribe((res: any) => {
            if (res) {
              if (res.message != null) {
                console.log('hay mensaje entrar');
              }else{
                console.log('no hay mensaje');
              }

            } else {
              console.log('couldnt get plan');
            }
          });
      } catch (error) {
        return console.log('sdfd', error);
      }
    }
  }

  handleCancelAndLeaveButton(): void {
    if (this.idPlan != null) {
      const body = {
        IdUsuario: this.idUsuario,
        IdPlan: this.idPlan,
      };
      console.log(body);
      try {
        this.http
          .post('http://localhost:3000/denegarUnionAPlan', body)
          .pipe(
            catchError((error) => {
              console.log('error is: ', error);
              return error;
            })
          )
          .subscribe((res: any) => {
            if (res) {
              if (res.message != null) {
                console.log('hay mensaje salir');
              }else{
                console.log('no hay mensaje');
              }
            } else {
              console.log('couldnt get plan');
            }
          });
      } catch (error) {
        return console.log('sdfd', error);
      }
    }
  }

  toggleJoin(): void {
    if (this.plan.IdEstado == null) {
      this.handleJoinButton();
    } else {
      this.handleCancelAndLeaveButton();
    }
    this.userJoined = !this.userJoined;
  }

  goBack(): void {
    
    window.history.back();
  }
}
