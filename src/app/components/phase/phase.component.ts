import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { PhaseButtonsComponent } from "../phase-buttons/phase-buttons.component";
import { MenuScoresComponent } from "../menu-scores/menu-scores.component";
import { IntersectionObserverService } from '../../services/intersection-observer.service';

@Component({
  selector: 'app-phase',
  standalone: true,
  imports: [CommonModule, PhaseButtonsComponent, MenuScoresComponent],
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.scss']
})
export class PhaseComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() currentPhaseClass: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';

  private observer: IntersectionObserver | undefined;
  
  constructor(private observerService: IntersectionObserverService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const element = document.querySelector(`.${this.currentPhaseClass}`);
      if (element) {
        this.observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.observerService.isElementAtTop(entry.boundingClientRect)) {
              this.sendColorToAndroid();
            }
          });
          
        }, { threshold: [0, 1] });
        this.observerService.observeElement(this.currentPhaseClass);
        this.observer.observe(element);

      }
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private async sendColorToAndroid(): Promise<void> {
    const element = document.querySelector(`.${this.currentPhaseClass}`);
    if (element) {
      const color = getComputedStyle(element).getPropertyValue('--phase-bg-color').trim();
      await new Promise(resolve => setTimeout(resolve, 50));
      if (window.AndroidInterface) {
        window.AndroidInterface.setStatusBarColor(color);
      } else {
        console.error('AndroidInterface ou setStatusBarColor não está definido.');
      }
    }
  }
  
}
