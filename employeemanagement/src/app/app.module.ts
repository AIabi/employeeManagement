import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {TableModule} from 'primeng/table';
import { ReactiveFormsModule }    from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {CalendarModule} from 'primeng/calendar';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RadioButtonModule} from 'primeng/radiobutton';

import { AppComponent } from './app.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';
import { EmployeeserviceService } from './employeedashboard/employeeservice/employeeservice.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeedashboardComponent,
    EmployeeregistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    RadioButtonModule
  ],
  providers: [EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
