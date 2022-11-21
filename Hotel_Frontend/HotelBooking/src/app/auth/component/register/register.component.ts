import {NgForm} from '@angular/forms'
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AccountService } from 'src/app/services/account.service';
import { User } from 'src/models/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AccountService]
})
export class RegisterComponent implements OnInit {

  type = 'customer'
  model: any = {

    id: '',
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    token: '',
    type: '',

  }
  constructor(
    private alertify: AlertifyService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.model.type = this.type
   
  }

  add(form: NgForm){
    // console.log(form.value.username);
    // console.log(this.model.username);
    this.addUser(form);

  }

  addUser( form : NgForm)
  {
    const newUser = {
      username: form.value.username,
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      email: form.value.email,
      password: form.value.password,
      type: form.value.type

    }
    this.accountService.addUsers(newUser)
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
