import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PlanScreenModel } from '../../../models/plan.model';
import { UserService } from '../../../api/services/user.service';

@Component({
  selector: 'app-plan-page',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './plan-page.component.html',
  styleUrl: './plan-page.component.scss'
})
export class PlanPageComponent implements OnInit {
  planContainer = 'plan-container';

  idPlan?: number;
  plan: PlanScreenModel;
  idUsuario?: number;

  constructor(private route: ActivatedRoute, private http: HttpClient, private userService: UserService) {
    this.plan = new PlanScreenModel();
  }

  ngOnInit(): void {
    this.idUsuario = this.userService.getIdUsuario(); 
    try {
      this.idPlan = parseInt(this.route.snapshot.paramMap.get('idPlan')!);
    } catch (error) {
      console.log(error);
    }

    if (this.idPlan != null) {
      console.log(this.idPlan)
      const body = { IdPlan: this.idPlan }
      try {
        this.http.post('http://localhost:3000/getPlanById', body).pipe(catchError(error => {
          console.log('error is: ', error);
          return error;
        })).subscribe((res: any) => {
          if (res) {
            this.plan = res.results[0];
            console.log("plan", this.plan);
          } else {
            console.log('couldnt get plan')
          }
        })
      } catch (error) {
        return console.log('sdfd', error);
      }
    }
  }

  handleJoinButton(): void {
    if (this.idPlan != null) {
      const body = { IdUsuario : this.idUsuario, IdPlan: this.idPlan, Privado: false}
      console.log(body)
      try {
        this.http.post('http://localhost:3000/unirseAPlan', body).pipe(catchError(error => {
          console.log('error is: ', error);
          return error;
        })).subscribe((res: any) => {
          if (res) {
            this.plan = res.results;
            console.log("plan", this.plan);
          } else {
            console.log('couldnt get plan')
          }
        })
      } catch (error) {
        return console.log('sdfd', error);
      }
    }
  }

}
