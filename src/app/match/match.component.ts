import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingComponent } from '../booking/booking.component';


@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


book(){
  this.router.navigate(["/login"]);
}
}

