import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { LoginModel } from '../model/login-model';
import { AuthenticationService } from '../services/authentication.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  model:LoginModel;
  loginSuccess:boolean;
  constructor(private router:Router,
  public adService:AdminService) { }


  ngOnInit() {
    this.model=new LoginModel("","");
  }
  messageClass:string="hidden";
  adminLogin(){
    this.adService.validateLogin(this.model).subscribe((response)=>
  {
    if(response)
    {
      this.router.navigate(["/manage"]);
      console.log("signed in")
    }
    else{
      this.messageClass="shoe alert-alert-danger";
      this.loginSuccess=false;
    }
    
  });
  }
  }


