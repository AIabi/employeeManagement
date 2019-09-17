import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  getUrl = 'api/getEmployeeDetails';
  constructor(private http: HttpClient) { }

  getEmployee(){
    return this.http.get(this.getUrl);
  }
}
