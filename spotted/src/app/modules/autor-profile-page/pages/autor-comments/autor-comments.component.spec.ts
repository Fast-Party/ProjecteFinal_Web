import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorCommentsComponent } from './autor-comments.component';

describe('AutorCommentsComponent', () => {
  let component: AutorCommentsComponent;
  let fixture: ComponentFixture<AutorCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorCommentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutorCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
