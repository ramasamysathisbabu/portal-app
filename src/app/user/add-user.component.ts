import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { CandidateResponse } from '../models/candidateresponse.model';
import { UserService } from './user.service';

@Component({
  templateUrl: './add-user.component.html'
})
export class AddUserComponent {

  user: User = new User();
  candidateResponse: CandidateResponse = new CandidateResponse();

  constructor(private router: Router, private userService: UserService) {

  }

//  createUser(): void {
//    this.userService.createUser(this.user)
//        .subscribe( data => {
//          alert("User created successfully.");
//        });
//
//  };

  createUser(): void {
    this.userService.createUser(this.candidateResponse)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

}
