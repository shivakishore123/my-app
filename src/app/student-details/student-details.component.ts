import { Component } from '@angular/core';
import { FormArray, FormControl , FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  public userForm:FormGroup = new FormGroup({
      name: new FormControl(),
      class: new FormControl(),
      fatherName: new FormControl(),
      email: new FormControl(),
      dob: new FormControl(),
       address: new FormGroup({
      addressLine: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(),
    }),
    marks: new FormArray([])
  })

  get marksFormArray(){
    return this.userForm.get('marks') as FormArray;
  }

  addmarks(){
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl(),
      })
    )
  }

  deletemarks(i:number){
    this.marksFormArray.removeAt(i);
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
  }
}
