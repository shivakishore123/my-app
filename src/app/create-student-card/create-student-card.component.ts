import { Component } from '@angular/core';
import { AccountsComponent } from '../accounts/accounts.component';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { StudentCardService } from '../student-card.service';

@Component({
  selector: 'app-create-student-card',
  templateUrl: './create-student-card.component.html',
  styleUrls: ['./create-student-card.component.css']
})
export class CreateStudentCardComponent {

  constructor(private _studentcards:StudentCardService) {}

  public studentform:FormGroup = new FormGroup(
    {
      name: new FormControl(),
      phone: new FormControl(),
      dob: new FormControl(),
      city: new FormControl(),
      email: new FormControl(),
      profile_picture: new FormControl(),
      school_city: new FormControl(),
      school_pin: new FormControl(),
      school_name: new FormControl(),
    },
  )
  submit(){
    console.log(this.studentform);

    this._studentcards.createcards(this.studentform.value).subscribe(
      (data: any)=>{
      alert("created successfully!!!");
    },
      (err:any)=>{
        alert("not created");
      }
    )
  }
}

