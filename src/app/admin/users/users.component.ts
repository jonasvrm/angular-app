import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  currentUsers: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getCurrentUser().subscribe(result => { this.currentUsers = result; });
  }
}
