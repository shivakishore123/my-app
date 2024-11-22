import { Component } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent {
  num1:number = 0;
  num2:number = 0;
  result:number = 0;
  sum(){
    this.result = this.num1 + this.num2 ; 
  }

  Div(){
    this.result = this.num1 / this.num2;
  }
  Mul(){
    this.result = this.num1 * this.num2;
  }
  sub(){
    this.result = this.num1 - this.num2;
  }
}
