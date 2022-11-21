import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-accomodation-details',
  templateUrl: './accomodation-details.component.html',
  styleUrls: ['./accomodation-details.component.css']
})
export class AccomodationDetailsComponent implements OnInit {

  model: any = {
    id: '',
    listing_id: '',
    booking_id: '',
    booking_date: new Date(),
    booking_start: '',
    booking_end: '',
    username: '',
  };

  listingDetails: any = [];
  ListingId: any = '';

  storage: any = JSON.parse(localStorage.getItem('isLogged') || '{}').username;
  storageListingID: any = JSON.parse(localStorage.getItem('listing') || '{}').listing_id;



  constructor(
      private dservice:DataService,
      private router:ActivatedRoute,
      private alertify:AlertifyService,
      private accountService:AccountService)
   {  this.makeid(); }

  ngOnInit(): void {

    this.ListingId =  this.router.snapshot.params['id']
    this.listingDetails =  this.dservice.callListingById(this.ListingId)
    console.log("#",this.listingDetails)
    localStorage.setItem('listing', JSON.stringify(this.listingDetails))
    this.model.listing_id = this.storageListingID
    this.model.username = this.storage
  }

  makeid(){
      var result = ''
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      var charactersLength = characters.length;
      for (var i = 0; i < charactersLength; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));

      }
      this.model.booking_id = result
  }

  add(forms : NgForm){
      this.bookListing(this.model)

  }

  bookListing(model:any)
  {
    console.log(model)

    const newListing = {
    
      listing_id: model.listing_id,
      booking_id : model.booking_id,
      booking_date : model.booking_date,
      booking_start : model.booking_start,
      booking_end : model.booking_end,
      username : model.username

    }
    this.accountService.addListing(newListing)
    .subscribe(
      (response) => {
        console.log(response);
        this.alertify.success(model.booking_id + ' successsfully created');
        setTimeout(() => {
          window.location.href = 'booking-user';
        }, 3000);
      },
      (err) => {
        this.alertify.error('' + err);
        console.log(err);
      }
    );
  }
}
