import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return [
      {"id": 1, "name": "John", "designation": "SE"},
      {"id": 2, "name": "Doe", "designation": "TSE"},
      {"id": 3, "name": "AAA", "designation": "SE"},
      {"id": 4, "name": "ABZ", "designation": "PSE"},
      {"id": 5, "name": "MM", "designation": "TSE"},
      {"id": 6, "name": "Deep", "designation": "PSE"},
    ]

  }
}
