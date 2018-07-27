import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User = new User();
  
  constructor(private route: ActivatedRoute, private usersService : UsersService) { }

  ngOnInit() {
    this.getUser(this.route.snapshot.params.id);

    //later
    this.route.params.subscribe(
      (params) => { this.getUser(params.id); }
    )
  }

  public getUser(id: string){
    this.usersService.getUser(id)
		.subscribe(user => {
			this.user = user;
		});
  }
}
