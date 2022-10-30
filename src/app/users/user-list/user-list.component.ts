import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { UsersInterface } from 'src/app/interface/users-interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any;
  searchTerm: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  // Call the service to get the users
  getUsers(search: any) {
    this.userService
      .searchResults(search)
      .subscribe((data: any) => (this.users = data));
  }
}
