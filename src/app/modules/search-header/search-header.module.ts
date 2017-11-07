import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHeaderComponent } from './search-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SearchHeaderComponent
  ],
  declarations: [SearchHeaderComponent]
})
export class SearchHeaderModule { }
