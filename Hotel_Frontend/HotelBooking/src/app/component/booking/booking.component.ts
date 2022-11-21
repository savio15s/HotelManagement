import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  booking: any = [];
  filterText = '';

  constructor(private dservice:DataService) { }

  ngOnInit(): void {
    this.booking = this.dservice.callBooking()
    
  }

}
