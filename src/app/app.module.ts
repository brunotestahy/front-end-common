import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';

/*
 * Exported modules
 */
import { HeaderModule } from './modules/header/header.module';
import { PractitionerThumbnailModule } from './modules/practitioner-thumbnail/practitioner-thumbnail.module';
import { IdentificationModule } from './modules/identification/identification.module';
import { CardModule } from './modules/card/card.module';
import { PractitionerCardModule } from './modules/practitioner-card/practitioner-card.module';
import { SearchHeaderModule } from './modules/search-header/search-header.module';
import { DialogModule } from './modules/dialog/dialog.module';
import { PractitionerFormModule } from './modules/practitioner-form/practitioner-form.module';
import { PractitionerPhotoChooserModule } from './modules/practitioner-photo-chooser/practitioner-photo-chooser.module';
import { SchedulerModule } from './modules/scheduler/scheduler.module';
import { LoadingModule } from './modules/loading/loading.module';
import { PractitionerNameModule } from './modules/practitioner-name/practitioner-name.module';
import { NavigationModule } from './modules/navigation/navigation.module';
import { SelectModule } from './modules/select/select.module';
import { LoginModule } from './modules/login/login.module';
import { UiLogModule } from './modules/ui-log/ui-log.module';
import { MenuModule } from './modules/menu/menu.module';

/*
 * Sample pages components
 */
import { NavListComponent } from './nav-list/nav-list.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderPageComponent } from './pages/header-page/header-page.component';
import { IdentificationPageComponent } from './pages/identification-page/identification-page.component';
import { PractitionerThumbnailPageComponent } from './pages/practitioner-thumbnail-page/practitioner-thumbnail-page.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { PractitionerCardPageComponent } from './pages/practitioner-card-page/practitioner-card-page.component';
import { SearchHeaderPageComponent } from './pages/search-header-page/search-header-page.component';
import { DialogPageComponent } from './pages/dialog-page/dialog-page.component';
import { PractitionerFormPageComponent } from './pages/practitioner-form-page/practitioner-form-page.component';
import { PractitionerPhotoChooserPageComponent } from './pages/practitioner-photo-chooser-page/practitioner-photo-chooser-page.component';
import { SchedulerPageComponent } from './pages/scheduler-page/scheduler-page.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { PractitionerNamePageComponent } from './pages/practitioner-name-page/practitioner-name-page.component';
import { NavigationPageComponent } from './pages/navigation-page/navigation-page.component';
import { SelectPageComponent } from './pages/select-page/select-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UiLogPageComponent } from './pages/ui-log-page/ui-log-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

/*
 * Configuration
 */
import { FrontEndConfigProvider, FrontEndConfig } from './modules/configuration/configuration';
import { environment } from '../environments/environment';

import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { FrontEndHttpFactory } from './modules/http/front-end-http';

import { CalendarModule } from './modules/calendar/calendar.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderPageComponent },
  { path: 'identification-cmp', component: IdentificationPageComponent },
  { path: 'practitioner-thumbnail', component: PractitionerThumbnailPageComponent },
  { path: 'card', component: CardPageComponent },
  { path: 'practitioner-card', component: PractitionerCardPageComponent },
  { path: 'search-header', component: SearchHeaderPageComponent },
  { path: 'dialog', component: DialogPageComponent },
  { path: 'practitioner-form', component: PractitionerFormPageComponent },
  { path: 'practitioner-photo-chooser', component: PractitionerPhotoChooserPageComponent },
  { path: 'loading', component: LoadingPageComponent },
  { path: 'scheduler', component: SchedulerPageComponent },
  { path: 'practitioner-name', component: PractitionerNamePageComponent },
  { path: 'navigation', component: NavigationPageComponent },
  { path: 'select', component: SelectPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'logout', component: LogoutPageComponent },
  { path: 'ui-log', component: UiLogPageComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavListComponent,
    HomeComponent,
    HeaderPageComponent,
    IdentificationPageComponent,
    PractitionerThumbnailPageComponent,
    CardPageComponent,
    PractitionerCardPageComponent,
    SearchHeaderPageComponent,
    DialogPageComponent,
    PractitionerFormPageComponent,
    PractitionerPhotoChooserPageComponent,
    SchedulerPageComponent,
    LoadingPageComponent,
    PractitionerNamePageComponent,
    NavigationPageComponent,
    SelectPageComponent,
    LoginPageComponent,
    UiLogPageComponent,
    LogoutPageComponent,
    MenuPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    PractitionerThumbnailModule,
    IdentificationModule,
    CardModule,
    PractitionerCardModule,
    SearchHeaderModule,
    DialogModule,
    PractitionerFormModule,
    PractitionerPhotoChooserModule,
    SchedulerModule,
    CalendarModule,
    LoadingModule,
    PractitionerNameModule,
    NavigationModule,
    SelectModule,
    LoginModule,
    UiLogModule,
    MenuModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    Title,
    { provide: FrontEndConfigProvider, useValue: environment },
    {
      provide: Http,
      useFactory: FrontEndHttpFactory,
      deps: [XHRBackend, RequestOptions, FrontEndConfigProvider, Router]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
