import { Injectable } from '@angular/core';
import { BookingModel } from '../model/booking-model';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { DisplayModel } from '../model/display-model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  model:BookingModel;
 

  constructor(
    private http:HttpClient) { }
    Url: string ="http://localhost:9008/BookingService";
    
    setModal(item)
{
  this.model= item;
}


  getAll(){
    
    return this.model;
  }
  
    proceed(item:BookingModel)
   {
    this.Url = this.Url + "/api/booking";
     console.log("proceeding", item); 
     let body=JSON.stringify(item);
     let httpOptions=
     {
       headers:new HttpHeaders({
         "Content-Type":"application/json"
       })
     }
     return this.http.post(this.Url,body,httpOptions);
     
   }
}


