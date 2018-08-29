import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { PaymentComponent } from '../booking/payment.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"payment",component:PaymentComponent},
   

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistersRoutingModule { }
