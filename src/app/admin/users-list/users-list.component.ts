import { Component, OnInit } from '@angular/core';
import { User } from "../../shared/models/user";
import { UsersService } from '../users.service';

@Component({
	selector: 'app-users-list',
	templateUrl: './users-list.component.html',
	styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

	userslist: User[];

	constructor(private usersService : UsersService) { }

	ngOnInit() {
		this.getUsers();
	}

	private getUsers(){
		this.usersService.getUsers()
		.subscribe(users => {
			this.userslist = users;
		});
	}

	public delete(id: string){
		this.usersService.delete(id)
			.subscribe(data => this.getUsers());
	}

}
