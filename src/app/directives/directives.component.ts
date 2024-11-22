import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  // age:number = 20;
  ages:number[] = [10,20,30,40,50,60];

  // state:string = "telangana";
  states:string[] = ['telangana','andhra','karnataka'];

  products:any = [
    {name:'pen',price:20},
    {name:'shirt',price:2000},
    {name:'mobile',price:30000},
    {name:'laptop',price:50000}
  ]

  today:any = new Date();

  hello:boolean = true;
}
