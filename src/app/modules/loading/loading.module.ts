import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { LoadersCssModule } from 'angular2-loaders-css';

@NgModule({
  imports: [
    CommonModule,
    LoadersCssModule
  ],
  exports: [
    LoadingComponent
  ],
  declarations: [LoadingComponent]
})
export class LoadingModule { }
