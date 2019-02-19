import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {SampleComponent} from './sample/sample.component';
import {EmployeesComponent} from './employees/employees.component';
import {EmployeesSalaryPipe} from './employees/employeesSalary.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EmployeeComponent, SampleComponent,EmployeesComponent, EmployeesSalaryPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
