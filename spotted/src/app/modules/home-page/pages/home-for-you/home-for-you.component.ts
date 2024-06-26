import { Component } from '@angular/core';
import { PlanCardModel } from '../../../../models/plan.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';
import { CardContainerComponent } from '../../../../share/card-container/card-container.component';

import { UserService } from '../../../../api/services/user.service';
@Component({
  selector: 'app-home-for-you',
  standalone: true,
  imports: [CardContainerComponent],
  templateUrl: './home-for-you.component.html',
  styleUrl: './home-for-you.component.scss',
})
export class HomeForYouComponent {
  idUsuario?: number;
  planes: PlanCardModel[] = [];

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.idUsuario = this.userService.getIdUsuario(); 
    this.fetchPlanes();
    console.log(this.planes);
  }

  async fetchPlanes() {
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
            if (res) {
              console.log(res);
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
}
