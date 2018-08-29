import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '../model/login-model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  loginList:LoginModel[];
  constructor(private http:HttpClient) { }

  adminUrl:string="http://localhost:9008/AdminService"
  
  validateLogin(item:LoginModel)
  {
  return this.http.get(this.adminUrl+"/api/validateAdmin/"+item.username+"/"+item.password);
  }

}
