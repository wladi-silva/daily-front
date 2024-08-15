import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntersectionObserverService {

  private colorSubject = new Subject<string>();
  private observer: IntersectionObserver | undefined;
  color$ = this.colorSubject.asObservable();

  constructor() { }

  observeElement(elementClass: string): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const element = document.querySelector(`.${elementClass}`);
      if (element) {
        this.observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.isElementAtTop(entry.boundingClientRect)) {
              const color = this.getColorFromElement(element);
              this.colorSubject.next(color);
            }
          });
        }, { threshold: [0, 1] });
        this.observer.observe(element);
      }
    }
  }

  disconnectObserver(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private getColorFromElement(element: Element): string {
    return getComputedStyle(element).getPropertyValue('--phase-bg-color').trim();
  }

  private isElementAtTop(rect: DOMRect): boolean {
    return rect.top <= 0 && rect.bottom >= 0;
  }

}
