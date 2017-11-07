import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoadingModule } from '../loading/loading.module';
import { TestEmptyModule } from '../test-empty/test-empty.module';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    LoadingModule,
    FormsModule,
    TestEmptyModule
  ],
  exports: [
    LoginComponent, LogoutComponent
  ],
  declarations: [LoginComponent, LogoutComponent],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
