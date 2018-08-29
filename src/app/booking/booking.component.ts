import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap} from '@angular/router';
import { BookingModel } from '../model/booking-model';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  model:BookingModel;

  constructor(private router:Router,
    public service:BookingService,
    public route:ActivatedRoute) { }

  ngOnInit() {
    this.model=new BookingModel("","",0);
    let uname=this.route.snapshot.paramMap.get("uname");
    console.log(`selected name:${uname}`);
     
  }
     
  proceed()
  {
    this.service.setModal(this.model);
    this.service.proceed(this.model).subscribe({
      complete:() => {
        console.log("proceeding");
        this.router.navigate(["/display"]);

      }
    });
  }


}
