import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { PlanModel } from '../../../../models/plan.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  planContainer = 'plan-container';

  planes: PlanModel[] = [];
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchPlanes();
  }

  fetchPlanes() {
    try {
      this.http.get('http://localhost:3000/getPlanes').subscribe((res: any) => {
        console.log('hola');
        if (res) {
          this.planes = res.results
          console.log(this.planes)
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
