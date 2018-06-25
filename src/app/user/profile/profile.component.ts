import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from "@angular/router";
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : User = new User();
  
  constructor(private userService: UserService, private router: Router) {
    this.userService.profile()
    .subscribe(
      data => this.user = data as User,
      error => console.log(error)
    )
  }

  ngOnInit() {
    
  }

}
