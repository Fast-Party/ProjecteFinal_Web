import { Component, OnInit } from '@angular/core';
import { PlanScreenModel } from '../../../models/plan.model';

@Component({
  selector: 'app-plan-page',
  standalone: true,
  imports: [],
  templateUrl: './plan-page.component.html',
  styleUrl: './plan-page.component.scss'
})
export class PlanPageComponent implements OnInit{
  idPlan!: number;
  plan: PlanScreenModel;
  constructor() {
    this.plan = new PlanScreenModel();
  }

  ngOnInit(): void {
  }

}
