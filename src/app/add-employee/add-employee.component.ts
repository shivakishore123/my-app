import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  empname:string = "";
  role:string = "";
  employees:any = [];

  add(){
    let employee = { 
      name:this.empname,
      role:this.role
    }
    this.employees.push(employee)
  }

}
