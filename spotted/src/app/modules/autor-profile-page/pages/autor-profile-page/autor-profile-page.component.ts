import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PlanCardModel } from '../../../../models/plan.model';
import { AutorPlanModel } from '../../../../models/autor.model';
@Component({
  selector: 'app-autor-profile-page',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './autor-profile-page.component.html',
  styleUrl: './autor-profile-page.component.scss'
})
export class AutorProfilePageComponent implements OnInit {

  isFollowing: boolean = false;

  idAutor?: number;
  perfilAutor: AutorPlanModel;
  planesAutor: PlanCardModel[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.perfilAutor = new AutorPlanModel();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idAutor = params['idAutor'];
      console.log('idAutor', this.idAutor);
    });
    if (this.idAutor != null) {
      console.log(this.idAutor)
      const body = { IdUsuario: this.idAutor }
      try {
        this.http.post('http://localhost:3000/perfilAutor', body).pipe(catchError(error => {
          console.log('error is: ', error);
          return error;
        })).subscribe((res: any) => {
          if (res) {
            this.perfilAutor = res.perfil[0];
            console.log("perfil", this.perfilAutor);
            this.planesAutor = res.planes;
            console.log(this.planesAutor);
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
