import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorEventsComponent } from './autor-events.component';

describe('AutorEventsComponent', () => {
  let component: AutorEventsComponent;
  let fixture: ComponentFixture<AutorEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutorEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
