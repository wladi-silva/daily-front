import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntersectionObserverService {

  private colorSubject = new Subject<{ backgroundColor: string, borderColor: string }>();
  private observer: IntersectionObserver | undefined;
  color$ = this.colorSubject.asObservable();

  constructor() { }

  observeElement(elementClass: string): void {
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

  disconnectObserver(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private getColorFromElement(element: Element): { backgroundColor: string, borderColor: string } {
    const computedStyle = getComputedStyle(element);
    return {
      backgroundColor: computedStyle.getPropertyValue('--phase-bg-color').trim(),
      borderColor: computedStyle.getPropertyValue('--phase-border-color-dark').trim()
    };
  }
  

  public isElementAtTop(rect: DOMRect): boolean {
    return rect.top <= 0 && rect.bottom >= 0;
  }

}
