import { Injectable } from '@angular/core';
import{RegisterModel} from '../model/register-model';
import{HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  register:RegisterModel[];
  constructor(
    private http:HttpClient) { }
Url: string ="http://localhost:9008/RegisterService";
  create(item:RegisterModel)
   {
     this.Url = this.Url + "/api/register";
     console.log("create", item); 
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
