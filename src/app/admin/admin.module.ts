import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { PreloaderComponent } from "../shared/preloader/preloader.component";
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    PreloaderComponent,
    UsersComponent,
    UsersListComponent,
    UsersEditComponent,
    UserDetailsComponent
  ]
})
export class AdminModule { }
