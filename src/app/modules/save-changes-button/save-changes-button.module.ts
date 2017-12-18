import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveChangesButtonComponent } from './save-changes-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SaveChangesButtonComponent
  ],
  declarations: [SaveChangesButtonComponent]
})
export class SaveChangesButtonModule { }
