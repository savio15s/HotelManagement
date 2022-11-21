import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/models/users';

import { AlertifyService } from './alertify.service';
import { DataService } from './data.service';

const userUrl = 'http://localhost:3000/users';
const listingUrl = 'http://localhost:3000/listing';

@Injectable({ providedIn: 'root' })
export class AccountService {
  allUserFromDB: any = '';
  userLoggedIn: any = '';
  loggedIn = false;

  constructor(
    private http: HttpClient,
    private alertify: AlertifyService,
    private service: DataService
  ) {
    this.getUsers();
  }

  ngOnInit() {}

  getData() {
    return this.http.get('http://localhost:3000/getData');
  }

  getUsers() {
    this.allUserFromDB = this.service.call();
  }

  putData(newUsers: any) {
    return this.http.post('http://localhost:3000/users/putData', newUsers);
  }

  addUsers(newUsers: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(userUrl, newUsers, { headers: headers });
  }

  addListing(newUsers: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(listingUrl, newUsers, { headers: headers });
  }

  login(user: User) {
    console.log(this.allUserFromDB[0]);
    console.log('All Users :' + this.allUserFromDB);
    this.userLoggedIn = this.allUserFromDB[0]
      .map((el: any) => el)
      .filter((ele: any) => ele.username == user.username);
    this.userLoggedIn = this.userLoggedIn[0];

    console.log('Logged in User');
    console.log(this.userLoggedIn.username);

    if (
      this.userLoggedIn.username &&
      this.userLoggedIn.password == user.password
    ) {
      this.loggedIn = true;

      const person = {
        username: this.userLoggedIn.username,
        type: this.userLoggedIn.type,
        id: this.userLoggedIn.id,
      };

      localStorage.setItem('isLogged', JSON.stringify(person));
      this.alertify.success('Login Success');

      if (this.userLoggedIn.type == 'admin') {
        setTimeout(() => {
          window.location.href = '/user';
        }, 2000);
      } else if (this.userLoggedIn.type == 'customer') {
        setTimeout(() => {
          window.location.href = '/user';
        }, 2000);
      } else {
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      }
    } else {
      this.alertify.error('Credentials not Valid');
    }
  }

  isLoggedIn() {
    if (localStorage.hasOwnProperty('isLogged')) {
      return true;
    }
    return false;
  }

  logOut() {
    localStorage.removeItem('isLogged');
    this.loggedIn = false;
  }
}
