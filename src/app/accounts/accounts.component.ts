import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

accounts:any = [];
term:string = "";

column:string = "";
order:string = "";

page:number = 0;
limit:number = 0;

constructor(private _accountsService:AccountsService){

  _accountsService.getaccounts().subscribe(
    (data:any)=>{
      this.accounts = data;
    },
    (err:any)=>{
      alert("some internal error");
    }
  )
}

filter(){
  this._accountsService.getfilteredaccounts(this.term).subscribe(
    (data:any)=>{
      this.accounts = data;
    },
    (err:any)=>{
      alert("internal error");
    }
  )
}

sort(){
  this._accountsService.getsortedaccounts(this.column, this.order).subscribe(
    (data:any)=>{
      this.accounts = data;
    },
    (err:any)=>{
      alert("some internal error");
    }
  )
}

delete(id:string){
  this._accountsService.deleteaccount(id).subscribe(
    (data:any)=>{
      alert("deleted Successfully!!!")
      location.reload();
    },
    (err:any)=>{
      alert("some internal error");
    }
  )
}
pagination(){
  this._accountsService.getpagedaccounts(this.limit, this.page).subscribe(
    (data:any)=>{
      this.accounts = data;
    },
    (err:any)=>{
      alert("internal error");
    }
  )
  }
}


