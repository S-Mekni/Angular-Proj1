import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

    public employees = [];
    public errorMsg: any;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
     this.employeeService.getEmployees()
     .subscribe(data => {
      this.employees = data; // assign the coming data to the local variable 'employees'
     }, error =>{
       this.errorMsg = error;
      });
  }

}
