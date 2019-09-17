import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeregistrationService {
  saveUrl: string = 'api/addEmployeeDetails';

  constructor(private http: HttpClient) { }

  saveUser(requestBody){
    return this.http.post(this.saveUrl,requestBody);
  }

}
