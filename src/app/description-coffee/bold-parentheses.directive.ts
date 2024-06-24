import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appBoldParentheses]'
})
export class BoldParenthesesDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.boldTextInParentheses();
  }

  boldTextInParentheses() {
    const element = this.el.nativeElement;
    let text = element.innerHTML;

    // Use regular expression to find text inside parentheses
    const regex = /\((.*?)\)/g;
    const matches = text.match(regex);

    if (matches) {
      matches.forEach(match => {
        // Replace the matched text with bold text
        const boldText = match.replace(/\((.*?)\)/, '(<strong>$1</strong>)');
        text = text.replace(match, boldText);
      });
    }

    // Update the element's innerHTML
    this.renderer.setProperty(element, 'innerHTML', text);
  }
}
