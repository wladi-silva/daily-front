import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PhaseButtonsDetailsComponent } from "../phase-buttons-details/phase-buttons-details.component";

@Component({
  selector: 'app-phase-buttons',
  standalone: true,
  imports: [CommonModule, PhaseButtonsDetailsComponent],
  templateUrl: './phase-buttons.component.html',
  styleUrl: './phase-buttons.component.scss'
})
export class PhaseButtonsComponent {

  @Input() currentPhaseClass: string = '';
  
}
