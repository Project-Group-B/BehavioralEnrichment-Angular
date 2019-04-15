import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// for table displays
import { MatPaginatorModule} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import { HomeComponent } from './home/home.component';
import { RequestFormComponent, InsertNewItemDialogComponent, InsertNewAnimalDialogComponent } from './request-form/request-form.component';
import { RequestFormStatusComponent } from './request-form-status/request-form-status.component';
import { IncidentReportComponent } from './incident-report/incident-report.component';
import { IncidentReportStatusComponent } from './incident-report-status/incident-report-status.component';
import { MasterApprovedComponent } from './master-approved/master-approved.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { Globals } from './globals';
import { AdminComponent, EditUserInfoDialogComponent } from './admin/admin.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RequestFormComponent,
    RequestFormStatusComponent,
    IncidentReportComponent,
    IncidentReportStatusComponent,
    MasterApprovedComponent,
    HeaderComponent,
    InsertNewItemDialogComponent,
    AdminComponent,
    UserAccountComponent,
    HelpComponent,
    InsertNewAnimalDialogComponent,
    EditUserInfoDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatMenuModule,
    MatGridListModule,
    FormsModule,
    MatSnackBarModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatIconModule,
    MatSortModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTabsModule,
    MatTooltipModule,
    MatExpansionModule
  ],
  entryComponents: [InsertNewItemDialogComponent, InsertNewAnimalDialogComponent, EditUserInfoDialogComponent],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule {
}
