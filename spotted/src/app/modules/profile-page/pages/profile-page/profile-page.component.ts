import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProfileModel } from '../../../../models/profile.model';
import { PlanModel } from '../../../../models/plan.model';

import { UserService } from '../../../../api/services/user.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent implements OnInit {

  profileContainer = 'profile-container';
  planContainer = 'plan-container';

  idUsuario?: number;
  perfilUsuario: ProfileModel;
  planesUsuario: PlanModel[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private userService: UserService) {
    this.perfilUsuario = new ProfileModel();
  }

  ngOnInit(): void {

    this.idUsuario = this.userService.getIdUsuario();
    console.log(this.idUsuario);
    
    if (this.idUsuario != null) {
      console.log(this.idUsuario)
      const body = { IdUsuario: this.idUsuario }
      try {
        this.http.post('http://localhost:3000/perfilUsuario', body).pipe(catchError(error => {
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
