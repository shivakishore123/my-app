import { Component } from '@angular/core';
import { ImdbService } from '../imdb.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class ImdbComponent {
imdb:any = [];

constructor(private _imdb:ImdbService){
  _imdb.getimdb().subscribe(
    (data:any)=>{
      this.imdb = data ;
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}

}
