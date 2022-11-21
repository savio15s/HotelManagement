import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent implements OnInit {

  listing: any = []
  filterText = ''

  storage: any = JSON.parse(localStorage.getItem('isLogged') || '{}').type;


  constructor(private dservice:DataService) { }

  ngOnInit(): void {

    this.listing = this.dservice.callListing();
    //console.log("Listing", this.listing)

  }

  isloggedInUser(): boolean {
    if(this.storage == 'customer') {
      return true;
    }
    return false;
  }

  handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'An error accured ' + err.error.message;
    } else {
      errorMessage = 'System error';
    }
    return throwError(errorMessage);
  }

}
