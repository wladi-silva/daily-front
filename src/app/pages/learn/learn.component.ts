import { Component, OnInit } from '@angular/core';
import { PhaseComponent } from '../../components/phase/phase.component';
import { CommonModule } from '@angular/common';
import { Phase } from '../../types/phases.type';
import { PhaseService } from '../../services/phase.service';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [PhaseComponent, CommonModule],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.scss'
})
export class LearnComponent implements OnInit {

  phases: Phase[] = [];

  constructor(private phaseService: PhaseService) {}

  ngOnInit(): void {
    this.phaseService.getPhase().subscribe((data: Phase) => {
      this.phases.push({
        title: data.title,
        subtitle: data.subtitle,
        className: data.className
      });
    });
  }
  
}
