import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PlanCardModel } from '../../../../models/plan.model';
import { AutorPlanModel } from '../../../../models/autor.model';

@Component({
  selector: 'app-autor-profile-page',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './autor-profile-page.component.html',
  styleUrl: './autor-profile-page.component.scss'
})
export class AutorProfilePageComponent implements OnInit {

  profileContainer = 'profile-container';
  planContainer = 'plan-container';

  idUsuario?: number;
  perfilUsuario: AutorPlanModel;
  planesUsuario: PlanCardModel[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.perfilUsuario = new AutorPlanModel();
  }

  ngOnInit(): void {
    try {
      this.idUsuario = parseInt(this.route.snapshot.paramMap.get('idUsuario')!);
    } catch (error) {
      console.log(error);
    }

    if (this.idUsuario != null) {
      console.log(this.idUsuario)
      const body = { IdUsuario: this.idUsuario }
      try {
        this.http.post('http://localhost:3000/perfilAutor', body).pipe(catchError(error => {
          console.log('error is: ', error);
          return error;
        })).subscribe((res: any) => {
          if (res) {
            this.perfilUsuario = res.perfil[0];
            console.log("perfil", this.perfilUsuario);
            this.planesUsuario = res.planes;
            console.log(this.planesUsuario);
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
