import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupWithoutAccountComponent } from './popup-without-account.component';

describe('PopupWithoutAccountComponent', () => {
  let component: PopupWithoutAccountComponent;
  let fixture: ComponentFixture<PopupWithoutAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupWithoutAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupWithoutAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
