package demo.sc.employeeManagemet.employeemanagement.controller;

import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import demo.sc.employeeManagemet.employeemanagement.emplloyeemodel.Employee;
import demo.sc.employeeManagemet.employeemanagement.employeeservice.EmployeeService;

@RestController
public class EmployeeController {
	@Autowired
	EmployeeService employeeService;
	
	@GetMapping("api/getEmployeeDetails")
	public ResponseEntity<String> getEmployeeDetails(){
		ResponseEntity<String> response = null;
		JSONArray responseArray = new JSONArray();
		try {
			ArrayList<Employee> employeeDetails = employeeService.getEmployeeDetails();
			for(int i =0;i<employeeDetails.size();i++) {
				JSONObject obj = new JSONObject(employeeDetails.get(i));
				responseArray.put(obj);
				
			}
			response = new ResponseEntity<String>(responseArray.toString(),HttpStatus.OK); 
			
		} catch(Exception e) {
			response = new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
		
		return response;
	}
	
	@PostMapping("api/addEmployeeDetails")
	public ResponseEntity<String> saveEmployeeDetails(@RequestBody Employee employee){
		ResponseEntity<String> response = null;
		try {
			 employeeService.saveEmployeeDetails(employee);
			response = new ResponseEntity<String>(HttpStatus.OK); 
			
		} catch(Exception e) {
			response = new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
		
		return response;
	}

}
