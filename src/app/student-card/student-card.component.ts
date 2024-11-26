import { Component } from '@angular/core';
import { StudentCardService } from '../student-card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {
 
  cards:any =[];
  term:string = "";

  column:string = "";
  order:string = "";

  limit:number = 0;
  page:number = 0;

  constructor(private _studentcards:StudentCardService){
    _studentcards.getstudentcards().subscribe(
      (data:any)=>{
        this.cards = data ;
      },
      (err:any)=>{
        alert("internal error ");
      }
    )
  }

  filter(){
    this._studentcards.getfilteredcards(this.term).subscribe(
      (data:any)=>{
        this.cards = data ;
      },
      (err:any)=>{
        alert("error in server")
      }
    )
  }
  
  sort(){
    this._studentcards.getsortedcards(this.column,this.order).subscribe(
      (data:any)=>{
        this.cards = data ;
      },
      (err:any)=>{
        alert("error in server")
      }
    )
  }

  pagination(){
    this._studentcards.getpagedcards(this.limit,this.page).subscribe(
      (data:any)=>{
        this.cards = data ;
      },
      (err:any)=>{
        alert("error in server")
      }
    )
  }

  delete(id:string){
    this._studentcards.deletecards(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
        location.reload();
      },
      (err:any)=>{
        alert("not deleted");
      }
    )
  }
}
