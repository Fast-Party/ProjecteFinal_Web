import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PlanCardModel } from '../../../../models/plan.model';
import { AutorPlanModel } from '../../../../models/autor.model';

import { AutorService } from '../../../../api/services/autor.service';
import { UserService } from '../../../../api/services/user.service';
@Component({
  selector: 'app-autor-profile-page',
  standalone: true,
  imports: [HttpClientModule,CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './autor-profile-page.component.html',
  styleUrl: './autor-profile-page.component.scss'
})
export class AutorProfilePageComponent implements OnInit {

  isFollowing: boolean = false;
  idUsuario!: number;
  idAutor!: number;
  perfilAutor: AutorPlanModel;
  planesAutor: PlanCardModel[] = [];
  imagenesLocal: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private autorService: AutorService, private userService: UserService) {
    this.perfilAutor = new AutorPlanModel();
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.idUsuario = this.userService.getIdUsuario();
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

  async toFollowAutor(){
    if(this.idUsuario != null && this.idAutor != null){
      const body = {IdSeguidor: this.idUsuario, IdSeguido: this.idAutor};
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
            this.perfilAutor.Seguidores = (this.perfilAutor.Seguidores || 0) + 1; 
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
  if(this.idUsuario != null && this.idAutor != null){
    const body = {IdSeguidor: this.idUsuario, IdSeguido: this.idAutor};
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
          this.perfilAutor.Seguidores = (this.perfilAutor.Seguidores || 1) - 1;
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
