import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerComponent } from './scheduler.component';
import { ScheduleModule } from 'primeng/primeng';
import { CalendarModule } from 'angular-calendar';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ScheduleModule,
    CalendarModule.forRoot(),
    TranslateModule.forRoot()
  ],
  exports: [
    SchedulerComponent
  ],
  declarations: [SchedulerComponent]
})
export class SchedulerModule { }
