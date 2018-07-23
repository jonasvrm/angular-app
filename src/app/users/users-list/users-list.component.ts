import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { User } from "../../shared/models/user";
import { UsersService } from '../users.service';
import { UsersEditComponent } from '../../users/users-edit/users-edit.component';
import { Router } from '@angular/router';
import '../../../scripts/general.js';
import { ModalDirective } from '../../shared/modal/modal.directive';
import { ModalService } from '../../shared/modal.service';

declare var general: any;

@Component({
	selector: 'app-users-list',
	templateUrl: './users-list.component.html',
	styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

	userslist: User[];

	constructor(private usersService : UsersService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver, private modalService: ModalService) { }

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
		//this.usersService.delete(id)
		//	.subscribe(data => this.getUsers());
		general.deleteDialog();
	}

	public edit(id: string){
		this.modalService.show();

		// let componentFactory = this.componentFactoryResolver.resolveComponentFactory(UsersEditComponent);

		// let viewContainerRef = this.modal;
		// viewContainerRef.clear();

		// let componentRef = viewContainerRef.createComponent(componentFactory);
		// componentRef.instance.getUser(id);
		
		//this.router.navigate(['/admin/user/edit/'+id]);
	}

}
