import { Component } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {

  images:any = [];

  constructor(private _image:ImagesService){
    _image.getimages().subscribe(
      (data:any)=>{
        this.images = data ;
      },
      (err:any)=>{
        alert("error inside the server");
      }
    )
  }
}
