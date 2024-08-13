import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseButtonsComponent } from './phase-buttons.component';

describe('PhaseButtonsComponent', () => {
  let component: PhaseButtonsComponent;
  let fixture: ComponentFixture<PhaseButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhaseButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhaseButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
