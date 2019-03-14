import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestFormStatusComponent } from './request-form-status/request-form-status.component';
import { IncidentReportComponent } from './incident-report/incident-report.component';
import { IncidentReportStatusComponent } from './incident-report-status/incident-report-status.component';
import { MasterApprovedComponent } from './master-approved/master-approved.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './auth/admin.guard';

// https://angular.io/guide/router#milestone-5-route-guards
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', canActivate: [AuthGuard], component: HomeComponent},
  {path: 'request-form',  canActivate: [AuthGuard], component: RequestFormComponent},
  {path: 'request-form-status',  canActivate: [AuthGuard], component: RequestFormStatusComponent},
  {path: 'incident-report',  canActivate: [AuthGuard], component: IncidentReportComponent},
  {path: 'incident-report-status',  canActivate: [AuthGuard], component: IncidentReportStatusComponent},
  {path: 'master-approved',  canActivate: [AuthGuard], component: MasterApprovedComponent},
  {path: 'admin', canActivate: [AdminGuard], component: AdminComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
