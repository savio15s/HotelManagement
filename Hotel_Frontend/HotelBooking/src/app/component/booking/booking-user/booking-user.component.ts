import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-booking-user',
  templateUrl: './booking-user.component.html',
  styleUrls: ['./booking-user.component.css']
})
export class BookingUserComponent implements OnInit {

  bookingByUserName: any = [];

  storage: any = JSON.parse(localStorage.getItem('isLogged') || '{}').username
  filterText = ''

  constructor(private dservice:DataService) {

    this.getBookingByUsername()
   }

  ngOnInit(): void {
  }


  getBookingByUsername() {

    this.bookingByUserName = this.dservice.callBookingByUsername(this.storage)

  }
}
