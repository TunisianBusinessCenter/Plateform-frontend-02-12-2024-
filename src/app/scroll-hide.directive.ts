import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollHide]'
})
export class ScrollHideDirective {
  private lastScrollTop = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const st = window.pageYOffset || document.documentElement.scrollTop;
  
    if (st > this.lastScrollTop) {
      // Scrolling down, hide the content with opacity 0
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    } else {
      // Scrolling up, show the content with opacity 1
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    }
  
    this.lastScrollTop = st;
  }
  }