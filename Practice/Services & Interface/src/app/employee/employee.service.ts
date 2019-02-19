import {Injectable} from '@angular/core';
import {IEmployee} from './IEmployee';

@Injectable()
export class EmployeeService{
	getEmployee(): IEmployee[]{
		return [
		{id:101,firstName:'Anadi',lastName:'Sharma',salary:10000,dob:'02/23/1998'},
		{id:102,firstName:'Surbhi',lastName:'Shrivastav',salary:12000,dob:'08/10/1995'},
		{id:103,firstName:'Mohit',lastName:'Dubey',salary:12000,dob:'04/21/1991'},
		{id:104,firstName:'Raj',lastName:'Kumar',salary:8000,dob:'09/13/1996'},
		{id:105,firstName:'Monica',lastName:'Singh',salary:9000,dob:'12/20/1997'},
		{id:106,firstName:'Amit',lastName:'Mishra',salary:8000,dob:'05/03/1992'},
		];
}

}
