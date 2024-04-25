import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlanPageComponent } from './create-plan-page.component';

describe('CreatePlanPageComponent', () => {
  let component: CreatePlanPageComponent;
  let fixture: ComponentFixture<CreatePlanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePlanPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePlanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
