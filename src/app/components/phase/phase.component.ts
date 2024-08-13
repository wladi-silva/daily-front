import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PhaseButtonsComponent } from "../phase-buttons/phase-buttons.component";

@Component({
  selector: 'app-phase',
  standalone: true,
  imports: [CommonModule, PhaseButtonsComponent],
  templateUrl: './phase.component.html',
  styleUrl: './phase.component.scss'
})
export class PhaseComponent implements OnInit {

  @Input() currentPhaseClass: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';

  ngOnInit(): void {
    
  }

}