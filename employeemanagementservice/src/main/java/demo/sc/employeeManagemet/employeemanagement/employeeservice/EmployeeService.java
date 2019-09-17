package demo.sc.employeeManagemet.employeemanagement.employeeservice;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import demo.sc.employeeManagemet.employeemanagement.data.EmployeeRepository;
import demo.sc.employeeManagemet.employeemanagement.emplloyeemodel.Employee;

@Service
public class EmployeeService {
	
	@Autowired
	EmployeeRepository employeeRespository;

	public ArrayList<Employee> getEmployeeDetails() {
		// TODO Auto-generated method stub
		return employeeRespository.getEmployee();
	}
	
	public boolean saveEmployeeDetails(Employee employee) {
		// TODO Auto-generated method stub
		try {
			employeeRespository.setEmployee(employee);
			return true;
		} catch(Exception e) {
			return false;
		}
		
	}

}
