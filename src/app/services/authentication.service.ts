import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { importExpr } from '../../../node_modules/@angular/compiler/src/output/output_ast';
import{LoginModel}from '../model/login-model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  Url:string="http://localhost:9008/RegisterService"
  constructor(private http:HttpClient) { }

  validateLogin(item:LoginModel)
  {
    this.Url = this.Url + "/api/validate";
    console.log("created",item);
    let body=JSON.stringify(item);
    let httpOptions={
      headers:new HttpHeaders({
        "Content-Type":"application/json"
      })
    }
    return this.http.post(this.Url,body,httpOptions);
  }
}
