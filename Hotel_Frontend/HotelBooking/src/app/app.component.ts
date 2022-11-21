import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from './services/account.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'HotelBooking';

  constructor(private service: AccountService, private dservice: DataService) {

  }
  ngOnInit(){
      //this.getDataFromAPI();
      // this.putDataFromAPI();
      //this.callDataService();
      //this.callUserDataService();
      //this.callListingById();

    }
  callDataService() {
    console.log(this.dservice.callListing());
  }

  callUserDataService() {

    console.log(this.dservice.call());
  }

  callListingById() {
    console.log(this.dservice.callListingById("10001"));
  }


  putDataFromAPI(){
    this.service.putData("OUTPUT").subscribe((response)=>{
      console.log("Response from API POST ",response)
   },(error)=>{
     console.log("POST : ",error)
   })
  }

  }

