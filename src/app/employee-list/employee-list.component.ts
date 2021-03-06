import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public errorMessage = ""
  public employees:any = [];
  constructor(private _employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data,
      error => this.errorMessage = error)
  }

}
