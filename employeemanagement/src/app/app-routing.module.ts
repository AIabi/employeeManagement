import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';

const routes: Routes = [
  {path: 'dashboard', component: EmployeedashboardComponent},
  {path: 'registration', component: EmployeeregistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
