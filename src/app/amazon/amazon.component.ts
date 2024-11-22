import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {
  amazon:any = [];

  constructor(private _amazon:AmazonService){
    _amazon.getamazon().subscribe(
      (data:any)=>{
        this.amazon = data ;
      },
      (err:any)=>{
        alert("some server side error");
      }
    )
  }
}
