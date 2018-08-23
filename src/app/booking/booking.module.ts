import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { PaymentComponent } from './payment.component';
import { MatchComponent } from '../match/match.component';

@NgModule({
  imports: [
    CommonModule,
    BookingRoutingModule
  ],
  declarations: [BookingComponent,PaymentComponent],
  exports:[BookingComponent,PaymentComponent]
})
export class BookingModule { }
