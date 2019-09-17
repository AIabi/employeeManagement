import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee';
import { EmployeeserviceService } from './employeeservice/employeeservice.service';

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit {

  employees ;
  cols = [
    { header: 'First Name', field: 'firstName' },
    { header: 'Last Name', field: 'lastname' },
    { header: 'Gender', field: 'gender' },
    { header: 'Department', field: 'department' },
    { header: 'Date Of Birth', field: 'dateOfBirth' }
];
  constructor(private employeeService :EmployeeserviceService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
this.employeeService.getEmployee().subscribe(res =>{
  this.employees = res;
  console.log(res);
})
  }

}
