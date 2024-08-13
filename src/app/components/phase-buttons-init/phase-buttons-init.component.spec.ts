import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseButtonInitComponent } from './phase-buttons-init.component';

describe('PhaseButtonsInitComponent', () => {
  let component: PhaseButtonInitComponent;
  let fixture: ComponentFixture<PhaseButtonInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhaseButtonInitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhaseButtonInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
