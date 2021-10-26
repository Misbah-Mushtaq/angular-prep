import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path : "", redirectTo: '/employees', pathMatch: 'full'},
  {path : 'employees', component: EmployeeListComponent},
  {path : 'departments', component: DepartmentListComponent},
  {path : 'employeeDetails', component: EmployeeDetailsComponent},
  {path : "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DepartmentListComponent, EmployeeListComponent, EmployeeDetailsComponent, PageNotFoundComponent]