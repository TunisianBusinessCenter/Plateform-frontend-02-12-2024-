import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideBracedTextContent'
})
export class HideBracedTextContentPipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value) {
      return '';
    }
    
    // Replace text inside curly braces with empty string
    return value.replace(/\{[\s\S]*?\}/g, '');

  }

}

