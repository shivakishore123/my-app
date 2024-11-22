import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  weather:any = [];

  constructor(private _weather:WeatherService){
    _weather.getweather().subscribe(
      (data:any)=>{
        this.weather[0] = data ;
      },
      (err:any)=>{
        alert("some internal error occured");
      }
    )
  }
}
