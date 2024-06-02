import { Component } from '@angular/core';
import { PlanCardModel } from '../../../../models/plan.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';
import { CardContainerComponent } from '../../../../share/card-container/card-container.component';

import { UserService } from '../../../../api/services/user.service';

@Component({
  selector: 'app-explore-trend',
  standalone: true,
  imports: [CardContainerComponent],
  templateUrl: './explore-trend.component.html',
  styleUrl: './explore-trend.component.scss'
})
export class ExploreTrendComponent {
  idUsuario?: number;
  planesTrendings: PlanCardModel[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.idUsuario = this.userService.getIdUsuario(); 
    this.fetchPlanesTrending();

  }

  async fetchPlanesTrending() {
    if (this.idUsuario != null) {
      const body = { IdUsuario: this.idUsuario };
      try {
        this.http
          .post('http://localhost:3000/getPlanesTendencias', body)
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
            if (res) {
              console.log(res);
              this.planesTrendings = res.results;
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
