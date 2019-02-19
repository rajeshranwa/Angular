//reading data
import { Component } from '@angular/core';

@Component({
  selector: "employees",
  templateUrl: "app/employees/employees.component.html"
})

export class EmployeesComponent {
  employees: any[] = [
  {id:101,firstName:'Anadi',lastName:'Sharma',salary:10000,dob:'02/23/1990'},
  {id:102,firstName:'Surbhi',lastName:'Srivastava',salary:12000,dob:'01/20/1985'},
  {id:103,firstName:'Mohit',lastName:'Dubey',salary:11000,dob:'09/29/1986'},
  {id:104,firstName:'Raj',lastName:'Gupta',salary:9000,dob:'10/10/1985'},
  {id:105,firstName:'Monica',lastName:'Mittal',salary:8000,dob:'06/18/1987'},
  {id:106,firstName:'Amit',lastName:'Mishar',salary:10000,dob:'01/17/1989'}];
}