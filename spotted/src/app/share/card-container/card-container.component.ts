import { Component, Input, OnInit } from '@angular/core';
import { PlanModel } from '../../models/plan.model';

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.scss'
})
export class CardContainerComponent implements OnInit{

  @Input() plan: PlanModel | null = null;

  isLiked: boolean = false;
  isFollowing: boolean = false;

  //FECHA
  //originalDate: any = this.plan?.Fecha; No funciona
  originalDate: any = '2024-03-13T16:24:16.000Z';
  diaSemana: string = '';
  dia: number = 0;
  mes: string = '';
  year: number = 0;
  hora: number = 0;
  minutos: number = 0;

  constructor() { }
   
  ngOnInit(): void {
    console.log((this.plan?.Fecha)?.toString());

    const date = new Date(this.originalDate);
     this.diaSemana = new Intl.DateTimeFormat("es-ES", { weekday: "short" }).format(date);
     this.dia = date.getDate();
     this.mes = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(date);
     this.year = date.getFullYear();
     this.hora = date.getHours();
     this.minutos = date.getMinutes();
  
  }
}
