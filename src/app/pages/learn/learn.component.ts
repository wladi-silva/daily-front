import { Component } from '@angular/core';
import { PhaseComponent } from '../../components/phase/phase.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [PhaseComponent, CommonModule],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.scss'
})
export class LearnComponent {

  phases = [
    { currentPhaseClass: 'phase-color-blue', title: 'Genêsis', subtitle: 'A Criação' },
    { currentPhaseClass: 'phase-color-green', title: 'Êxodo', subtitle: 'A Libertação' },
    { currentPhaseClass: 'phase-color-orange', title: 'Levítico', subtitle: 'As Leis' },
    { currentPhaseClass: 'phase-color-red', title: 'Números', subtitle: 'O Deserto' },
    { currentPhaseClass: 'phase-color-pink', title: 'Deuteronômio', subtitle: 'A Recapitulação' }
  ];
  
}
