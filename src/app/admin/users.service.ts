import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../shared/models/user";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http:HttpClient) { }

	getAll(): Observable<User[]> {
		return this._http.get("http://localhost:3000/user/all", {
			headers: new HttpHeaders().append("Content-Type", "application/json")
		})
		.map(res => res.json());
		
	}
}
