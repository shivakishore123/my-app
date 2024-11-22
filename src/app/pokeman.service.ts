import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemanService {

  constructor(private _httpClient:HttpClient) { }
   
  getpokeman():Observable<any>{
   return this._httpClient.get("https://dummyapi.online/api/pokemon")
  }
}
