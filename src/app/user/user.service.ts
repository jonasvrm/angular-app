import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../shared/models/user";
import * as moment from "moment";

@Injectable({
  	providedIn: 'root'
})
export class UserService {

  	constructor(private http:HttpClient) { }

	//register a new account
  	register(body: any){
		return this.http.post("http://localhost:3000/user/register", body, {
			observe: "body",
			headers: new HttpHeaders().append("Content-Type", "application/json")
		});
	}

	//login an account
	login(body : any){
		return this.http.post("http://localhost:3000/user/login", body, {
			observe: "body",
			withCredentials: true,
			headers: new HttpHeaders().append("Content-Type", "application/json")
		});
	}

	getUser(id: string) {
		return this.http.get("http://localhost:3000/user/"+id)
		  .map(response => response as User);
	}
	
	public setSession(authResult) {
		const expiresAt = moment().add(authResult.expiration,'second');
		
		localStorage.setItem('user_id', authResult.user._id);
		localStorage.setItem('user_firstname', authResult.user.firstname);
        localStorage.setItem('token_id', authResult.token);
        localStorage.setItem("token_expiration", JSON.stringify(expiresAt.valueOf()) );
    }          

    logout() {
        localStorage.removeItem("token_id");
        localStorage.removeItem("token_expiration");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("token_expiration");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }    
}
