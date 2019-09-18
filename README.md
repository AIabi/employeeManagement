# employeeManagement
This is a small scale implementation of an enterprise level employee management

The project has been built in two parts. 
i. EmployeeManagement
ii. Employeemanagementservice

Employeemanagement is the frontend developed in angular,
for proper connection with employee management the application should start with npm start as it contains the ng serve --proxy 
to avoid cross origin in browsers.

Employeemanagementservice is an spring boot application and should be started in port 8080 or the designated port should be added to 
proxy.conf file in Employeemanagement's app folder for proper communication.

As of now no database has been used, All data are being stored in ArrayList in service so everytime service restarts it will be empty data but same can be used to implement persistence.

The swagger documentationn of the application can be found at http://localhost:8080/swagger-ui.html#