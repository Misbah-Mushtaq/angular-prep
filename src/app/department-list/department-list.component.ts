import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  public departments = [
    {id: 1, name :"Angular"},
    {id: 2, name :"React"},
    {id: 3, name :"Bootstrap"},
    {id: 4, name :"scss"},

  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSelect(department:any){
    this.router.navigate(['/departmentDetails', department.id])
  }
}
