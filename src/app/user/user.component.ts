import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { CandidateResponse } from '../models/candidateresponse.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  users: User[];
  candidateResponse: CandidateResponse[];
  
  constructor(private router: Router, private userService: UserService) {

  }

//  ngOnInit() {
//    this.userService.getUsers()
//      .subscribe( data => {
//        this.users = data;
//      });
//  };

  ngOnInit() {
    this.userService.getCandidateResponse()
      .subscribe( data => {
        this.candidateResponse = data;
      });
  };

  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


