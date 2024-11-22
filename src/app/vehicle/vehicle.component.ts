import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  vehicles:any = [];
  term:string = "";

  column:string = "";
  order:string = "";

  limit:number = 0;
  page:number = 0;

  constructor(private _vehicleService:VehicleService){


    _vehicleService.getvehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
filter(){
  this._vehicleService.getFiltervehicles(this.term).subscribe(
    (data:any)=>{
      this.vehicles = data;
    },
    (err:any)=>{
      alert("internal error");
    }
  )
}

sort(){
  this._vehicleService.getSortedvehicles(this.column, this.order).subscribe(
    (data:any)=>{
      this.vehicles = data;
    },
    (err:any)=>{
      alert("internal error");
    }
  )
}

delete(id:string){
  this._vehicleService.deletevehicle(id).subscribe(
    (data:any)=>{
      alert("Deleted successfully!!!");
      location.reload();
    },
    (err:any)=>{
      alert("internal error");
    }
  )
}

pagination(){
  this._vehicleService.getpagedvehicles(this.limit, this.page).subscribe(
    (data:any)=>{
      this.vehicles = data;
    },
    (err:any)=>{
      alert("internal error");
    }
  )
}

}
