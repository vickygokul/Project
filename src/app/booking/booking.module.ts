import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { PaymentComponent } from './payment.component';
import { MatchComponent } from '../match/match.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { DisplayBookingComponent } from './display-booking.component';

@NgModule({
  imports: [
    CommonModule,
    BookingRoutingModule,FormsModule
  ],
  declarations: [BookingComponent,PaymentComponent,DisplayBookingComponent],
  exports:[BookingComponent,PaymentComponent,DisplayBookingComponent]
})
export class BookingModule { }
