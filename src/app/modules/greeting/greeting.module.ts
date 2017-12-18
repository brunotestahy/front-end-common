import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    GreetingComponent
  ],
  declarations: [GreetingComponent]
})
export class GreetingModule { }
