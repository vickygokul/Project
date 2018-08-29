import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  isNetBanking: boolean = false; 
  
  isCreditCard: boolean = false; 
    
  isDebitCard: boolean = false; 
   
  isSelected:boolean = false;
  
    
  netBanking:any=3; 
  
   
   constructor(private router:Router) { }
  
    
  ngOnInit() {
    }
    
  updateUI(mode){
     
   this.isNetBanking=false; 
     
   this.isCreditCard=false; 
     
   this.isDebitCard=false;
     
   if(mode=="3")
       
   this.isNetBanking=true;
     
   else if(mode=="2")
      
   this.isCreditCard=true; 
     
   else if(mode=="1")
       
   this.isDebitCard=true;
    }
    success(){
      this.router.navigate(["/paymentstatus"]);
    }
    cancel(){
      this.router.navigate(["/paymentcancel"]);
    }
  
  }
  