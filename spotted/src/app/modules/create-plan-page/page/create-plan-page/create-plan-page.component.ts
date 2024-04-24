import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlanModel } from '../../../../models/plan.model';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-create-plan-page',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './create-plan-page.component.html',
  styleUrl: './create-plan-page.component.scss'
})
export class CreatePlanPageComponent {
  plan: PlanModel;
  constructor(private http: HttpClient, private router: Router) {
    this.plan = new PlanModel();
  }

  postPlan() {
    console.log(this.plan)
    try {
      this.http.post('http://localhost:3000/postPlan', this.plan).pipe(catchError(error => {
        console.log('error is: ', error);
        return error;
      })).subscribe((res: any) => {
        console.log('hola');
        if (res) {
          console.log("plan posted correctly");
          this.router.navigateByUrl('/home')
        } else {
          console.log('couldnt post plan')
        }
      })
    } catch (error) {
      return console.log('sdfd', error);
    }
  }
}
