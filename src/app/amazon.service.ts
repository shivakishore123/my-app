import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  constructor(private _httpsClient:HttpClient) { }
    getamazon():Observable<any>{
      return this._httpsClient.get("https://fakestoreapi.com/products");
    }
  
}
