package demo.sc.employeeManagemet.employeemanagement.data;

import java.util.ArrayList;

import org.springframework.stereotype.Component;

import demo.sc.employeeManagemet.employeemanagement.emplloyeemodel.Employee;

@Component
public class EmployeeRepository {

	private static final ArrayList<Employee> employee = new ArrayList<Employee>();

	public ArrayList<Employee> getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		EmployeeRepository.employee.add(employee);
	}
}
