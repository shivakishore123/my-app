import { Component } from '@angular/core';
import { FormGroup , FormControl , FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(60)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',[Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    //Nested Form Group
    address: new FormGroup({
      city: new FormControl('',[Validators.required]),
      pin: new FormControl()

    }),
    //(1)
    type: new FormControl(),
    // busfee: new FormControl(),
    // hostelFee: new FormControl()
    cards: new FormArray([])
  })

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  addcard(){
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl('',[Validators.required]),
        expiry: new FormControl(),
        cvv: new FormControl(),
      })
    )
  }

  deleteCard(i:number){
    this.cardsFormArray.removeAt(i);
  }
  constructor(){
    //(3)
    this.userForm.get("type")?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayScholar'){
          this.userForm.addControl('busfee', new FormControl());
          this.userForm.removeControl('hostelFee');
        }
        else{
          this.userForm.addControl('hostelFee', new FormControl());
          this.userForm.removeControl('busfee');
        }
      }
    )
  }
  submit(){
    console.log(this.userForm);
    // location.reload();
  }
}
