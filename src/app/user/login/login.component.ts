import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm : FormGroup = new FormGroup({
			email: new FormControl(null, [Validators.email, Validators.required]),
			password: new FormControl(null, Validators.required),
		})

	constructor(private userService: UserService) { }

	ngOnInit() {
	}

	login(){
		if (!this.loginForm.valid) {
			console.log("Invalid credentials!");
		}else{
			this.userService.login(JSON.stringify(this.loginForm.value))
			.subscribe(
				data => { 
					console.log("Success: " + data); 
				},
				error => {
					console.log("Error: " + error.message);
				}
				
			)
		}
	}

}
