import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from './employee';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = "https://jsonplaceholder.typicode.com/users"
  constructor(private http : HttpClient) {

   }
  
  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.erroHandler));
  }
  
  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
}
}