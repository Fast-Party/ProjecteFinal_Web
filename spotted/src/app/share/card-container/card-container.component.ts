import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlanCardModel } from '../../models/plan.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.scss'
})
export class CardContainerComponent implements OnInit{

  @Input() plan: PlanCardModel | null = null;
  @Input() idUsuario: any = null;
  @Input() autorInfoVisible: boolean = true;
  @Output() planUpdated = new EventEmitter<PlanCardModel>();

  
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

   async toFollowAutor(){
      if(this.idUsuario != null && this.plan?.IdAutor != null){
        const body = {IdSeguidor: this.idUsuario, IdSeguido: this.plan!.IdAutor};
        try {
          fetch('http://localhost:3000/seguirUsuario', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          }).then(response => {
            if(response.ok){
              this.isFollowing = true;
              this.plan!.Seguidores = (this.plan!.Seguidores || 0) + 1; 
            }else{
              this.isFollowing = false;
            }
          });
        } catch (error) {
          console.log('Error: ', error);
        }
      }
   }

   async toUnfollowAutor(){
    if(this.idUsuario != null && this.plan?.IdAutor != null){
      const body = {IdSeguidor: this.idUsuario, IdSeguido: this.plan!.IdAutor};
      try {
        fetch('http://localhost:3000/dejarDeSeguirUsuario', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }).then(response => {
          if(response.ok){
            this.isFollowing = false;
            this.plan!.Seguidores = (this.plan!.Seguidores || 1) - 1;
          }else{
            this.isFollowing = true;
          }
        });
      } catch (error) {
        console.log('Error: ', error);
      }
    }
   }

   toggleFollow() {
    if (this.isFollowing) {
      this.toUnfollowAutor();
    } else {
      this.toFollowAutor();
    }
  }
}
