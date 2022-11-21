import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { User } from 'src/models/users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AccountService]
})
export class LOGINComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  model: User = new User();


  ngOnInit(): void {}
  

  login(form: NgForm){
    this.accountService.login(this.model)
  }

}
