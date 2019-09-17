import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeregistrationService } from './employeeregistration.service';

@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employeeregistration.component.html',
  styleUrls: ['./employeeregistration.component.css']
})
export class EmployeeregistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private employeeregistrationService: EmployeeregistrationService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      department: ['', Validators.required],
      dateOfBirth: [''],
      gender: ['Male']

  });
  }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }


  onSubmit(formValue){
    this.submitted = true;
  console.log(this.registerForm.value);

    if (this.registerForm.invalid) {
      return;
  }
  console.log(this.registerForm.value);

  this.loading = true;

  this.employeeregistrationService.saveUser(this.registerForm.value)
      .subscribe(
          data => {
              this.router.navigate(['/dashboard']);
          },
          error => {
              this.loading = false;
          });


  }
}
