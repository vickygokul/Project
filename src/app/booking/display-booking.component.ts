import { Component, OnInit } from '@angular/core';
import { BookingModel } from '../model/booking-model';
import { ActivatedRoute,Router,ParamMap} from '@angular/router';
import { BookingService } from '../services/booking.service';
import { DisplayModel } from '../model/display-model';

@Component({
  selector: 'app-display-booking',
  templateUrl: './display-booking.component.html',
  styleUrls: ['./display-booking.component.css']
})
export class DisplayBookingComponent implements OnInit {
  model:BookingModel;


  constructor(private route:ActivatedRoute,public service:BookingService) { }

  ngOnInit() {
    this.model=new BookingModel("","",0);
    
  
   this.model=this.service.getAll();
  }

}
