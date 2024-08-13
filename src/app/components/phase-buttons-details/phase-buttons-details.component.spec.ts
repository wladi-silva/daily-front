import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseButtonsDetailsComponent } from './phase-buttons-details.component';

describe('PhaseButtonsDetailsComponent', () => {
  let component: PhaseButtonsDetailsComponent;
  let fixture: ComponentFixture<PhaseButtonsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhaseButtonsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhaseButtonsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
