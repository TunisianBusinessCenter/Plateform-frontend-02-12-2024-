  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'braceTextExtractor'
  })
  export class BraceTextExtractorPipe implements PipeTransform {
    transform(value: string): string {
      if (!value) return '';

      const matches = value.match(/\{[\s\S]*?\}/g); // Regex to match text inside braces, including newlines
      if (!matches) return '';

      // Extract text inside braces and join them with a space
      return matches.map(match => match.slice(1, -1)).join(' ');
    }
  }
