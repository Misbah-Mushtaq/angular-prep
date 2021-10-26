import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = "https://jsonplaceholder.typicode.com/users"
  constructor(private http : HttpClient) {

   }
  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
  }
}
