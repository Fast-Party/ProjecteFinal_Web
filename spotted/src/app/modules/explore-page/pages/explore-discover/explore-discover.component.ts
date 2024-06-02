import { Component } from '@angular/core';
import { PlanCardModel } from '../../../../models/plan.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';
import { CardContainerComponent } from '../../../../share/card-container/card-container.component';

import { UserService } from '../../../../api/services/user.service';

@Component({
  selector: 'app-explore-discover',
  standalone: true,
  imports: [CardContainerComponent],
  templateUrl: './explore-discover.component.html',
  styleUrl: './explore-discover.component.scss'
})
export class ExploreDiscoverComponent {
  idUsuario?: number;
  planesDiscover: PlanCardModel[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.idUsuario = this.userService.getIdUsuario(); 
    this.fetchPlanesDiscover();
  }

  async fetchPlanesDiscover() {
    if (this.idUsuario != null) {
      const body = { IdUsuario: this.idUsuario };
      try {
        this.http
          .post('http://localhost:3000/getPlanesDescubrir', body)
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
              this.planesDiscover = res.results;;
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
