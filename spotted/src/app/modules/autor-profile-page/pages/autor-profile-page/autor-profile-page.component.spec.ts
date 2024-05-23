import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorProfilePageComponent } from './autor-profile-page.component';

describe('AutorProfilePageComponent', () => {
  let component: AutorProfilePageComponent;
  let fixture: ComponentFixture<AutorProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorProfilePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutorProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
