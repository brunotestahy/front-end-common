import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cpf } from './cpf.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    Cpf
  ],
  declarations: [Cpf]
})
export class CpfModule { }
