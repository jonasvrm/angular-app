import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { User } from '../../../shared/models/user';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  
  @Input() id: string;
  user: User = new User();
  
  constructor(private router: Router, private route: ActivatedRoute, private usersService : UsersService, private location: Location) { }

  ngOnInit() {
    //this.getUser(this.route.snapshot.params.id);
    this.getUser(this.id);

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

  public update(){
    this.usersService.update(this.user)
    .subscribe(result => {
			if(result == "success"){
        this.router.navigate(['/admin/users']);
      }
		});
  }  

  public back(){
    this.location.back();
  }
}
