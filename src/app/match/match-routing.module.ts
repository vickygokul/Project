import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel.component';
import { BookingComponent } from '../booking/booking.component';

const routes: Routes = [
  {path: "home",component: CarouselComponent},
  {path:"booking",component:BookingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
