import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { RegisterModel } from '../model/register-model';
import { LoginModel } from '../model/login-model';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model1 :RegisterModel;
  model:LoginModel;
  loginSuccess:boolean;
  constructor(private router:Router,
    public service:RegisterService,
  public authService:AuthenticationService) { }

  ngOnInit() {
    this.model1=new RegisterModel("","","","","",0);
    this.model=new LoginModel("","");
  }
 
  messageClass:string="hidden";
  login(){
    //e.preventDefault();
    this.authService.validateLogin(this.model).subscribe((response)=>
  {
    if(response)
    {
      this.router.navigate(["/booking"]);
    }
    else{
      this.messageClass="shoe alert-alert-danger";
      this.loginSuccess=false;
    }
    console.log("signed in")
  });
  }
  submit()
  {
    this.service.create(this.model1).subscribe({
      complete:() => {
        console.log("completed");
        window.alert("Successfully registered!! Please sign in to book the seats")
        this.router.navigate(["/login"]);
      }
    });
  }
}
