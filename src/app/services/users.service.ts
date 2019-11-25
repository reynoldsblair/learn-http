import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [];
  private usersUpdated = new Subject<User[]>();

  constructor(private http: HttpClient, private router: Router) { }

  getUsers() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/users')
    .subscribe(fetchedUsers => {
      this.users = fetchedUsers;
      this.usersUpdated.next([...this.users]);
    });
  }

  getUsersUpdatedListener() {
    return this.usersUpdated.asObservable();
  }
}
