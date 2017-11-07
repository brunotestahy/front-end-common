import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    MenuItemComponent
  ],
  declarations: [MenuComponent, MenuItemComponent]
})
export class MenuModule { }
