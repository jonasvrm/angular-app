import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { UserService } from "./user/user.service";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { UsersListComponent } from './users/users-list/users-list.component';

//import the authentication JWT HTTP interceptor
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth/auth.interceptor';
import { ModalComponent } from './shared/modal/modal.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { ModalDirective } from './shared/modal/modal.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    NavigationComponent,
    UsersListComponent,
    ModalComponent,
    UsersEditComponent,
    ModalDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
