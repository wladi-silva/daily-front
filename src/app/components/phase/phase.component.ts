import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { PhaseButtonsComponent } from "../phase-buttons/phase-buttons.component";

@Component({
  selector: 'app-phase',
  standalone: true,
  imports: [CommonModule, PhaseButtonsComponent],
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.scss']
})
export class PhaseComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() currentPhaseClass: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';

  private observer: IntersectionObserver | undefined;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const element = document.querySelector(`.${this.currentPhaseClass}`);
      if (element) {
        this.observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.isElementAtTop(entry.boundingClientRect)) {
              this.sendColorToAndroid();
            }
          });
          
        }, { threshold: [0, 1] });

        this.observer.observe(element);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private sendColorToAndroid(): void {
    const element = document.querySelector(`.${this.currentPhaseClass}`);
    if (element) {
      const color = getComputedStyle(element).getPropertyValue('--phase-bg-color').trim();
      (window as any).AndroidInterface.setStatusBarColor(color);
    } 
  }

  private isElementAtTop(rect: DOMRect): boolean {
    return rect.top <= 0 && rect.bottom >= 0;
  }

}
