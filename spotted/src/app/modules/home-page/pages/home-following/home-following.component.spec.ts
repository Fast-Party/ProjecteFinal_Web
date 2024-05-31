import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFollowingComponent } from './home-following.component';

describe('HomeFollowingComponent', () => {
  let component: HomeFollowingComponent;
  let fixture: ComponentFixture<HomeFollowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFollowingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
