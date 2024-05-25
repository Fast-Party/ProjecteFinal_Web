import { Component, OnInit } from '@angular/core';
import { CardContainerComponent } from '../../../../share/card-container/card-container.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AutorService } from '../../../../api/services/autor.service';
import { PlanCardModel } from '../../../../models/plan.model';

@Component({
  selector: 'app-autor-events',
  standalone: true,
  imports: [CardContainerComponent],
  templateUrl: './autor-events.component.html',
  styleUrl: './autor-events.component.scss'
})
export class AutorEventsComponent implements OnInit{
  idAutor!: number;
  planesAutor: PlanCardModel[] = [];
  constructor(private route: ActivatedRoute, private http: HttpClient, private autorService: AutorService ) {}

  ngOnInit():void {
    this.idAutor = this.autorService.getIdAutor();
    this.fetchPlanesAutor();
  }

  async fetchPlanesAutor() {
    if(this.idAutor != null){
      const body = { IdAutor: this.idAutor };
      try {
        this.http.post('http://localhost:3000/getPlanesDeAutor', body).subscribe((res: any) => {
          if(res){
            this.planesAutor = res.results;
            console.log(this.planesAutor);
          } else {
            console.log('empty');
            console.log(res);
          }
        });
      } catch (error) {
        return console.log('sdfd');
      }
    }
  }
}
