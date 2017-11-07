import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestEmptyValidatorDirective } from './test-empty.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TestEmptyValidatorDirective
  ],
  declarations: [TestEmptyValidatorDirective]
})
export class TestEmptyModule { }
