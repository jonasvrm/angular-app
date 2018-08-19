import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PreloaderComponent } from "../shared/preloader/preloader.component";
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

import { ModalService } from '../shared/modal/modal.service';
import { DomService } from '../shared/dom/dom.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersRoutingModule } from './users-routing.module';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    NgbModule,
    DataTablesModule
  ],
  declarations: [
    PreloaderComponent,
    UsersComponent,
    UsersListComponent,
    UsersEditComponent,
    UserDetailsComponent
  ],
  providers: [
    ModalService,
    DomService
  ]
})
export class UsersModule { }
