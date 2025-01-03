import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentCardService {

  constructor(private _httpClient:HttpClient) { }
  getstudentcards():Observable<any>{
   return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }

    getfilteredcards(term:string):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
    }

    getsortedcards(column:string, order:string):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order);
    }

    getpagedcards(limit:number,page:number):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+"&page="+page);
    }

    createcards(data:any):Observable<any>{
      return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data);
      
    }

    deletecards(id:string):Observable<any>{
      return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
    }
  } 

