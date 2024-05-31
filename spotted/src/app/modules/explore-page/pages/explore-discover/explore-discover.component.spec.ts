import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreDiscoverComponent } from './explore-discover.component';

describe('ExploreDiscoverComponent', () => {
  let component: ExploreDiscoverComponent;
  let fixture: ComponentFixture<ExploreDiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreDiscoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
