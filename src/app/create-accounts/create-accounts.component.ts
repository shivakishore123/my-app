import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent {

  constructor(private _accounts:AccountsService){}

  public accountform:FormGroup = new FormGroup(
    {
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl(),
    },

  );
  submit(){
    console.log(this.accountform);
    this._accounts.createaccounts(this.accountform.value).subscribe(
      (data:any)=>{
        alert("created successfully!!!");
      },
      (err:any)=>{
        alert("creation failed");
      }
    )
  }
}