import { Component } from '@angular/core';
import { PokemanService } from '../pokeman.service';

@Component({
  selector: 'app-pokeman',
  templateUrl: './pokeman.component.html',
  styleUrls: ['./pokeman.component.css']
})
export class PokemanComponent {

  pokemon:any = [];

  constructor(private _pokeman:PokemanService){
    _pokeman.getpokeman().subscribe(
      (data:any)=>{
        this.pokemon = data;
      },
      (err:any)=>{
        alert("some internal error")
      }
    )
  }
}
