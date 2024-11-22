import { Component } from '@angular/core';
import { AccountsComponent } from '../accounts/accounts.component';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-create-student-card',
  templateUrl: './create-student-card.component.html',
  styleUrls: ['./create-student-card.component.css']
})
export class CreateStudentCardComponent {

  constructor(private _accounts:AccountsService) {}

  public studentform:FormGroup = new FormGroup(
    {
      name: new FormControl(),
      phone: new FormControl(),
      dob: new FormControl(),
      city: new FormControl(),
      email: new FormControl(),
      profilepic: new FormControl(),
    },
  )
  submit(){
    console.log(this.studentform);

    this._accounts.createaccounts(this.studentform.value).subscribe(
      (data:any)=>{
        alert("created successfully!!!");
      },
      (err:any)=>{
        alert("not created");
      }
    )
  }
}

