import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  private usersSub: Subscription;

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers();
    this.usersSub = this.usersService.getUsersUpdatedListener()
    .subscribe((users: User[]) => {
      this.users = users;
    });
  }

}
