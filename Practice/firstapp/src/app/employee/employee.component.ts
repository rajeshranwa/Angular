import { Component } from '@angular/core';

@Component({
  selector: 'employee',
  templateUrl: 'app/employee/employee.component.html' ,
  styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeComponent {
  firstName:string = 'Virat';
  lastName:string = 'Kohli';
  salary:number = 50000;
  department:string = 'Training';
  imgPath:string ="https://www.tutorialspoint.com/images/logo.png";
  colspan:number = 2;
  classtouse:string= "class1";
  //usingclass3: boolean = true;
  clr:string ="red";
  showDetails:boolean = false;
  btnTxt: string ="Show Details";

  empName() :string {
    return this.firstName + ' '+this.lastName;
    }
    displayDetails(): void {
      debugger;
      this.showDetails = !this.showDetails;
      this.btnTxt=this.showDetails==true?"Hide Details":"Show Details";
    }
}