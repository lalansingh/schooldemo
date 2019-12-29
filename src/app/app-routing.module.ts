import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './school/shared/layout/layout.component';
import { HomeComponent } from './school/home/home.component';
import { LandingComponent } from './school/shared/landing/landing.component';
import { LoginComponent } from './school/login/login.component';
import { RegistrationComponent } from './school/registration/registration.component';
import { StudentsComponent } from './school/students/students.component';
import { BulkSmsComponent } from './school/bulk-sms/bulk-sms.component';
import { BulkEmailComponent } from './school/bulk-email/bulk-email.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path: '', component: LandingComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'sms', component: BulkSmsComponent },
      { path: 'email', component: BulkEmailComponent }
    ]
  },
  { path: '*', redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
