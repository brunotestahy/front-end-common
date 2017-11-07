import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    NavItemComponent
  ],
  declarations: [NavigationComponent, NavItemComponent]
})
export class NavigationModule { }
