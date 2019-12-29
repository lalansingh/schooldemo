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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmailComponent } from './school/dialog/email/email.component';
import { SmsComponent } from './school/dialog/sms/sms.component';
import { FormsModule } from '@angular/forms';
import { BulkSmsComponent } from './school/bulk-sms/bulk-sms.component';
import { BulkEmailComponent } from './school/bulk-email/bulk-email.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    LayoutComponent,
    LandingComponent,
    StudentsComponent,
    ActionComponent,
    EmailComponent,
    SmsComponent,
    BulkSmsComponent,
    BulkEmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgGridModule.withComponents([ActionComponent]),
    NgbModule
  ],
  providers: [],
  entryComponents: [EmailComponent, SmsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
