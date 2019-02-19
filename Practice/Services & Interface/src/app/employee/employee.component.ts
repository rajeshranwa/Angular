import {Component} from '@angular/core';
import {EmployeeService} from './employee.service';
import {IEmployee} from './IEmployee';

@Component({
		selector: 'employee',
		templateUrl: 'app/employee/employee.component.html',
		providers: [EmployeeService]
})

export class EmployeeComponent{
	employee: IEmployee[] = null;
	constructor(private empService:EmployeeService ){
		this.employee= this.empService.getEmployee();
		
	}
	colspan:number = 2;
	firstName: string='';
	lastName: string='';
	salary:number=0;
	dob:string='';
	employees:boolean= true;
	empName() :string {
    return this.firstName + ' '+this.lastName;
    }
}