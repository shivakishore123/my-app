import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  Length:number = 0;
  Breadth:number = 0;
  result:number = 0;
  result1:number = 0;

  area(){
    this.result = this.Length * this.Breadth
  }

  perimeter(){
    this.result1 = (this.Length+this.Breadth)* 2;
  }
}
