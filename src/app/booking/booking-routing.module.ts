import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking.component';
import { LoginComponent } from '../registers/login.component';
import { PaymentStatusComponent } from './payment-status.component';
import { CarouselComponent } from '../match/carousel.component';
import { DisplayBookingComponent } from './display-booking.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"paymentstatus",component:PaymentStatusComponent},
  {path:"carousel",component:CarouselComponent},
  {path:"display",component:DisplayBookingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
