import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMsg: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees()
    .subscribe(data => {
     this.employees = data; // assign the coming data to the local variable 'employees'
    } , error =>{
      this.errorMsg = error;
    });

}
}
