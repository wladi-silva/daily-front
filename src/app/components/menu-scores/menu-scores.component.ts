import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { IntersectionObserverService } from '../../services/intersection-observer.service';

@Component({
  selector: 'app-menu-scores',
  standalone: true,
  templateUrl: './menu-scores.component.html',
  styleUrls: ['./menu-scores.component.scss']
})
export class MenuScoresComponent implements OnInit, OnDestroy {

  @Input() currentPhaseClass: string = '';
  colorSubscription: Subscription | undefined;
  currentColor: string = '';

  constructor(
    private observerService: IntersectionObserverService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.colorSubscription = this.observerService.color$.subscribe(color => {
      console.log('Received color:', color);
      this.currentColor = color;
      this.applyColorToDivMenuScore();
    });
  }

  ngOnDestroy(): void {
    if (this.colorSubscription) {
      this.colorSubscription.unsubscribe();
    }
  }

  private applyColorToDivMenuScore(): void {
    const divMenuScore = this.el.nativeElement.querySelector('.div-menu-score');
    if (divMenuScore) {
      this.renderer.setStyle(divMenuScore, 'background-color', this.currentColor);
    }
  }
  
}