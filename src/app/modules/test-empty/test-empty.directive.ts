import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[smartTestEmpty]',
  providers: [{ provide: NG_VALIDATORS, useExisting: TestEmptyValidatorDirective, multi: true }]
})
export class TestEmptyValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } {
    const strValue = control.value as string;
    if (strValue != null) {
      if (strValue.trim().length === 0) {
        return { 'smart-test-empty': { value: control.value } };
      }
    }
    return null;
  }
}
