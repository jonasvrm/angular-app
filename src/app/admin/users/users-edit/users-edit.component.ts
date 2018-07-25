import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../shared/models/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  
  user: User = new User();
  
  constructor(private usersService : UsersService) { }

  ngOnInit() {

  }

  public getUser(id: string){
    this.usersService.getUser(id)
		.subscribe(user => {
			this.user = user;
		});
  }
}
