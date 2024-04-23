import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { PlanModel } from '../../../../models/plan.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  planes: PlanModel;
  constructor(private http: HttpClient, private router: Router) {
    this.planes = new PlanModel();
  }

  ngOnInit(): void {
    this.fetchPlanes();
  }

  fetchPlanes() {
    try {
      this.http.get('http://localhost:3000/getPlanes').subscribe((res: any) => {
        console.log('hola');
        if (res) {
          console.log(res)
          this.planes = res
        } else {
          console.log('empty')
          console.log(res)
        }
      })
    } catch (error) {
      return console.log('sdfd')
    }
  }

}
