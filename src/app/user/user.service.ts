import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
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

	profile(){
		return this.http.get("http://localhost:3000/user/profile", {
			observe: "body",
			withCredentials: true,
			headers: new HttpHeaders().append("Content-Type", "application/json")
		});
	}

	public setSession(authResult) {
        const expiresAt = moment().add(authResult.expiration,'second');

        localStorage.setItem('token', authResult.token);
        localStorage.setItem("expiration", JSON.stringify(expiresAt.valueOf()) );
    }          

    logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }    
}
