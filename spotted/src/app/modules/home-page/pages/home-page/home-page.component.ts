import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { PlanModel } from '../../../../models/plan.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError } from 'rxjs';
import { CardContainerComponent } from '../../../../share/card-container/card-container.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HttpClientModule, RouterLink, CardContainerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  idUsuario?: number;
  planContainer = 'plan-container';

  planes: PlanModel[] = [];
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPlanes();
  }

  fetchPlanes() {
    try {
      this.idUsuario = parseInt(this.route.snapshot.paramMap.get('idUsuario')!);
    } catch (error) {
      console.log(error);
    }
    if (this.idUsuario != null) {
      const body = { IdUsuario: this.idUsuario };
      try {
        this.http
          .post('http://localhost:3000/getPlanes', body)
          .pipe(
            catchError((error) => {
              console.log('error is: ', error);
              if (error.status === 404) {
                window.alert('Couldnt load planes');
              }
              return error;
            })
          )
          .subscribe((res: any) => {
            console.log('hola');
            if (res) {
              this.planes = res.results;
              console.log(this.planes);
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

  imagenesPortada = [];
  imagenesLogoAutor = [];


}

  // HACER ARRAY DE IMAGENES DE PORTADA PARA LOS PLANES NOMBRADAS POR NOMBRE DE LA FIESTA (EL DIRTY [RAZZMATAZZ],..)
  // EN CASO DE QUE NO HAYA EL TITULO DE LA FIESTA NO CONCUEDE CON EL NOMBRE DEL LOCAL

  // TAMBIEN HACER UN ARRAY DE IMAGENES PARA LA FOTO DE PERFIL DE LOS AUTORES DE LOS PLANES