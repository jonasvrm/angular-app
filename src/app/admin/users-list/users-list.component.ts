import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
	selector: 'app-users-list',
	templateUrl: './users-list.component.html',
	styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

	users : any[];

	constructor(private _usersService : UsersService) { }

	ngOnInit() {
	}

	listUsers(){
		this._usersService.getAll()
		.subscribe(
			data => { 
				this.users = JSON.parse(data);
			},
			error => {
				console.log("Error: " + error.message);
			}
			
		)
	}

}
