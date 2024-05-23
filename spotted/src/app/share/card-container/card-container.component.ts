import { Component, Input, OnInit } from '@angular/core';
import { PlanCardModel } from '../../models/plan.model';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.scss'
})
export class CardContainerComponent implements OnInit{

  @Input() plan: PlanCardModel | null = null;
  @Input() idUsuario: any = null;

  isLiked: boolean = false;
  isFollowing: boolean = false;
  buttonFollowingEnable: boolean = true;

  //FECHA
  originalDate: any ;
  diaSemana: string = '';
  dia: number = 0;
  mes: string = '';
  year: number = 0;
  hora: number = 0;
  minutos: number = 0;

  constructor() {
  }
   
  ngOnInit(): void {
    this.originalDate = this.plan?.Fecha;
    const date = new Date(this.originalDate);
     this.diaSemana = new Intl.DateTimeFormat("es-ES", { weekday: "short" }).format(date);
     this.dia = date.getDate();
     this.mes = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(date);
     this.year = date.getFullYear();
     this.hora = date.getHours();
     this.minutos = date.getMinutes();

     
     if(this.plan?.IsFollowing){
       this.isFollowing = true;
     }else{
       this.isFollowing = false;
     }

     if(this.plan?.IdAutor === this.idUsuario){
        this.buttonFollowingEnable = false;
     }

     if(this.plan?.RatingAutor === null){
      this.plan.RatingAutor = 0;
     }
  }

  refactorNumberDate(numero: number): string{
    if(numero < 10){
      return '0' + numero;
    }else{
      return numero.toString();
    }
   }
}
