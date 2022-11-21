import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-accomodation-add',
  templateUrl: './accomodation-add.component.html',
  styleUrls: ['./accomodation-add.component.css'],
  providers: [FormBuilder]
})
export class AccomodationAddComponent implements OnInit {

  admin = 'admin'
  username = 'savadmin'
  date = new Date();
  model: any = {
    listing_id: '',
    listing_title: '',
    description: '',
    street: '',
    city: '',
    postal_code: '',
    price: '',
    email: '',
    username: '',
    type: '',
    id: '',
    created: new Date(),
    token: '',
  };

  constructor(private dservice:DataService,
              private alertify:AlertifyService,
              private accountservice:AccountService
              ) { }

  ngOnInit(): void {

    this.model.username = this.username;
    this.model.type = this.admin;
    this.model.created = this.date;
  }

  add(form: NgForm)
  {
    this.addListing(form)
  }

  addListing(form: NgForm)
  {
      const newListing = {
        listing_id: form.value.listing_id,
          listing_title: form.value.listing_title,
          description: form.value.description,
          street: form.value.street,
          city: form.value.city,
          postal_code: form.value.postal_code,
          price: form.value.price,
          email: form.value.email,
          username: form.value.username,
          type: form.value.type,
          created: form.value.created,
      }
      this.accountservice.addListing(newListing)
      .subscribe(
        (response) => {
          console.log(response);
          this.alertify.success(form.value.username + ' successsfully created');
          setTimeout(() => {
            window.location.href = 'login';
          }, 2000);
        },
        (err) => {
          this.alertify.error('' + err);
          console.log(err);
        }
      );
  }
}
