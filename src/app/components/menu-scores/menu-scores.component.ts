import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IntersectionObserverService } from '../../services/intersection-observer.service';

@Component({
  selector: 'app-menu-scores',
  standalone: true,
  templateUrl: './menu-scores.component.html',
  styleUrls: ['./menu-scores.component.scss']
})
export class MenuScoresComponent implements OnInit {

  @Input() currentPhaseClass: string = '';

  private colorSubscription!: Subscription;

  constructor(private observerService: IntersectionObserverService) {}

  ngOnInit(): void {
    this.colorSubscription = this.observerService.color$.subscribe(color => {
      this.updateMenuColor(color);
    });
  }

  ngOnDestroy(): void {
    if (this.colorSubscription) {
      this.colorSubscription.unsubscribe();
    }
  }

  private updateMenuColor(colors: { backgroundColor: string, borderColor: string }): void {
    document.documentElement.style.setProperty('--phase-bg-color', colors.backgroundColor);
    document.documentElement.style.setProperty('--phase-border-color-dark', colors.borderColor);
  }
  
}
