import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "../../../shared/models/user";
import { UsersService } from '../users.service';
import { UsersEditComponent } from '../../users/users-edit/users-edit.component';
import { Router } from '@angular/router';
import '../../../../scripts/general.js';
import { PreloaderComponent } from '../../../shared/preloader/preloader.component';

declare var general: any;

@Component({
	selector: 'app-users-list',
	templateUrl: './users-list.component.html',
	styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

	userslist: User[];
	userslistOrig: User[];
	loading: boolean;

	searchText: string;

	@ViewChild('preLoader') preloader: PreloaderComponent;

	constructor(private usersService : UsersService, private router: Router) { }

	ngOnInit() {
		this.getUsers();
	}

	private getUsers(){
		this.userslist = [];
		this.userslistOrig = [];
		this.loading = true;

		this.usersService.getUsers()
		.subscribe(users => {
			this.userslist = users;
			this.userslistOrig = users;
			this.preloader.stop();
			this.loading = false;
		});
	}

	public delete(id: string){
		//this.usersService.delete(id)
		//	.subscribe(data => this.getUsers());
		general.deleteDialog();
	}

	public details(id: string){	
		this.router.navigate(['/admin/users/'+id]);
	}

	public edit(id: string){	
		this.router.navigate(['/admin/users/'+id+'/edit']);
	}

	//search for a value in the userslist
	public search(){
		this.userslist = this.userslistOrig.filter(this.usersFilter, this.searchText);
	}

	//return true if the searchstring matches a value in user
	usersFilter(user: User){
		if(!user.firstname){
			user.firstname = "";
		}
		if(!user.lastname){
			user.lastname = "";
		}

		if(user.email.toString().toLowerCase().indexOf(this.toString().toLowerCase()) > -1 
		|| user.firstname.toString().toLowerCase().indexOf(this.toString().toLowerCase()) > -1 
		|| user.lastname.toString().toLowerCase().indexOf(this.toString().toLowerCase()) > -1){
			return true;
		}
	}

}
