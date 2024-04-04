import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomboComponent } from './rombo.component';

describe('RomboComponent', () => {
  let component: RomboComponent;
  let fixture: ComponentFixture<RomboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RomboComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
