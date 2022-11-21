import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from 'src/models/users';
import { Listing } from 'src/models/listing';
import { Booking } from 'src/models/booking';


export class ListingResponse {
  constructor(
    public id: string,
    public  listing_id: string,
    public  listing_title: string,
    public  description: string,
    public  street: string,
    public  city: string,
    public postal_code: string,
    public  price: string,
    public  email: string,
    public username: string,
    public type: string,
    public created: Date,
    public token: string

  ){}
}


export class  DataResponse{
  constructor(
    public  id: string,
    public  username: string,
    public  firstname: string,
    public  lastname: string,
    public  email: string,
    public  password: string,
    public  token: string,
    public  type: string
  ){}
}

// export class  BookingResponse{
//   constructor(
//     public  id: string,
//     public  booking_id: string,
//     public  listing_id: string,
//     public  : string,
//     public  email: string,
//     public  password: string,
//     public  token: string,
//     public  type: string
//   ){}
// }



const baseUrl = 'http://localhost:3000/users'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tempArray: any;
  list!: ListingResponse[]; 
  users!: DataResponse[];
  bookings!: Booking[];

  constructor(private http:HttpClient) { }


  ngOnInit(){

  }
  call(){
    var tempArray: DataResponse[] = [];
    this.http.get('http://localhost:3000/users').subscribe(
    data => {  
                  tempArray.push(<User>data);
    });
    //console.log(tempArray)
    return tempArray;

  }

  // callListingById(id : any){
  //   var tempArray: DataResponse[] = [];
  //   this.http.get(`http://localhost:3000/listing/${id}`).subscribe(
  //   data => {  
  //                 tempArray.push(<User>data);
  //   });
  //   console.log(tempArray)
  //   return tempArray;

  // }

  callListingById(id:any){
    this.http.get<any>(`http://localhost:3000/listing/${id}`).subscribe(
      data => {  
        //console.log(data)
        this.list = data;
  });
  return this.list;
  }
  callListing(){
   
    this.http.get<any>(`http://localhost:3000/listing`).subscribe(
    data => {  
          //console.log(data)
          this.list = data;
    });
    return this.list;

  }

  callUsers(){
   
    this.http.get<any>(`http://localhost:3000/users`).subscribe(
    data => {  
          console.log(data)
          this.users = data;
    });
    return this.users;

  }

  callBooking(){
   
    this.http.get<any>(`http://localhost:3000/users`).subscribe(
    data => {  
          console.log(data)
          this.bookings = data;
    });
    return this.bookings;

  }

  callBookingByUsername(username : any){
    var tempArray: DataResponse[] = [];
    this.http.get(`http://localhost:3000/booking/${username}`).subscribe(
    data => {  
                  tempArray.push(<User>data);
    });
    console.log(tempArray)
    return tempArray;

  }
  
}
