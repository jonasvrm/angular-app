import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../../shared/models/user";
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private currentUsers: User[] = [];
  private usersSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private http:HttpClient) { }

	getUsers(): Observable<User[]> {
    return this.http.get("http://localhost:3000/user/all")
      .map(response => response as User[]);
  }

  delete(id: string) {
    return this.http.delete("http://localhost:3000/user/"+id, {
			observe: "body",
			withCredentials: true,
			headers: new HttpHeaders().append("Content-Type", "application/json")
		}); 
  }

  update(user: User) {
    return this.http.patch("http://localhost:3000/user/"+user._id, user, {
			observe: "body",
			withCredentials: true,
			headers: new HttpHeaders().append("Content-Type", "application/json")
		}); 
  }

  getUser(id: string) {
    return this.http.get("http://localhost:3000/user/"+id)
      .map(response => response as User);
  }


  /* SPECIFIC FUNCTIONS */

  addCurrentUser(user: User){

    //only add if not existing
    if (!this.currentUsers.find(x => x._id === user._id)) {
      this.currentUsers.push(user);
      console.log("pushed");
    }

    this.usersSubject.next(this.currentUsers);
  }

  getCurrentUser(): Observable<any> {
    return this.usersSubject.asObservable();
  } 
}

