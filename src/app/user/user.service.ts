import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  	providedIn: 'root'
})
export class UserService {

  	constructor(private _http:HttpClient) { }

  	register(body: any){
		return this._http.post("http://localhost:3000/user/register", body, {
			observe: "body",
			headers: new HttpHeaders().append("Content-Type", "application/json")
		});
	}

	login(body : any){
		return this._http.post("http://localhost:3000/user/login", body, {
			observe: "body",
			withCredentials: true,
			headers: new HttpHeaders().append("Content-Type", "application/json")
		});
	}

	profile(){
		return this._http.get("http://localhost:3000/user/profile", {
			observe: "body",
			withCredentials: true,
			headers: new HttpHeaders().append("Content-Type", "application/json")
		});
	}
}
