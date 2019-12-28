import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './school/home/home.component';
import { LoginComponent } from './school/login/login.component';
import { RegistrationComponent } from './school/registration/registration.component';
import { LayoutComponent } from './school/shared/layout/layout.component';
import { LandingComponent } from './school/shared/landing/landing.component';
import { StudentsComponent } from './school/students/students.component';
import { AgGridModule } from 'ag-grid-angular';
import { ActionComponent } from './school/students/child/action.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    LayoutComponent,
    LandingComponent,
    StudentsComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([ActionComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
