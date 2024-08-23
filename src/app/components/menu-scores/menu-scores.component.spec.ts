import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuScoresComponent } from './menu-scores.component';

describe('MenuScoresComponent', () => {
  let component: MenuScoresComponent;
  let fixture: ComponentFixture<MenuScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuScoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
