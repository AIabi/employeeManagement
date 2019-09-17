import { TestBed } from '@angular/core/testing';

import { EmployeeregistrationService } from './employeeregistration.service';

describe('EmployeeregistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeregistrationService = TestBed.get(EmployeeregistrationService);
    expect(service).toBeTruthy();
  });
});
