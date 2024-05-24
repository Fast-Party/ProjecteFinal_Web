import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PlanCardModel } from '../../../../models/plan.model';
import { AutorPlanModel } from '../../../../models/autor.model';
import { UserService } from '../../../../api/services/user.service';
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

  idAutor?: number;
  perfilUsuario: AutorPlanModel;
  planesUsuario: PlanCardModel[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private userService: UserService
  ) {
    this.perfilUsuario = new AutorPlanModel();
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
