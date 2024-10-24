import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollHide]'
})
export class ScrollHideDirective {
  private lastScrollTop = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) { }


  }