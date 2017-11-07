import { LogService } from './log.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLogComponent } from './ui-log.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    UiLogComponent
  ],
  declarations: [UiLogComponent],
  providers: [LogService]
})
export class UiLogModule { }
