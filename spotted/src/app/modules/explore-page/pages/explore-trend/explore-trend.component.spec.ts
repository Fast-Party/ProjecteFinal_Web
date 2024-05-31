import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTrendComponent } from './explore-trend.component';

describe('ExploreTrendComponent', () => {
  let component: ExploreTrendComponent;
  let fixture: ComponentFixture<ExploreTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreTrendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
