import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];
  filterText = '';

  constructor(private dservice:DataService) { }

  ngOnInit(): void {

    this.users = this.dservice.callUsers();
  
  }
}
