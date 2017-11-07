import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class Cpf implements PipeTransform {

  transform(value: string, args?: string[]): any {
    if (!value) {
      return value;
    }
    const original = value.replace(/[^0-9]/g, '');
    let result = '';
    for (let i = 0; i < original.length; i++) {

      if ((i === 3 || i === 6)) {
        if (original.charAt(i) !== '.') {
          result += '.';
        }
      } else if (i === 9) {
        if (original.charAt(i) !== '-') {
          result += '-';
        }
      }
      result += original.charAt(i);
    }
    return result;
  }

}
