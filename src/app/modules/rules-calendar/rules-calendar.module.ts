import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesCalendarComponent } from './rules-calendar.component';
import { RulesCalendarService } from './rules-calendar.service';
import 'hammerjs';
import 'hammer-timejs';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RulesCalendarComponent
  ],
  declarations: [RulesCalendarComponent],
  providers: [RulesCalendarService]
})
export class RulesCalendarModule { }
