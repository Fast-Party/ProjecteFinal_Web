import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PlanCardModel } from '../../../../models/plan.model';
import { AutorPlanModel } from '../../../../models/autor.model';
import { AutorService } from '../../../../api/services/autor.service';
@Component({
  selector: 'app-autor-profile-page',
  standalone: true,
  imports: [HttpClientModule,CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './autor-profile-page.component.html',
  styleUrl: './autor-profile-page.component.scss'
})
export class AutorProfilePageComponent implements OnInit {

  isFollowing: boolean = false;

  idAutor!: number;
  perfilAutor: AutorPlanModel;
  planesAutor: PlanCardModel[] = [];
  imagenesLocal: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private autorService: AutorService) {
    this.perfilAutor = new AutorPlanModel();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idAutor = params['idAutor'];
      this.autorService.setIdAutor(this.idAutor);
    });
    if (this.idAutor != null) {
      const body = { IdUsuario: this.idAutor }
      try {
        this.http.post('http://localhost:3000/perfilAutor', body).pipe(catchError(error => {
          console.log('error is: ', error);
          return error;
        })).subscribe((res: any) => {
          if (res) {
            this.perfilAutor = res.perfil[0];
            if(this.perfilAutor.ImagenesLocal){
              this.imagenesLocal = JSON.parse(this.perfilAutor.ImagenesLocal);
            }
            this.planesAutor = res.planes;
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
