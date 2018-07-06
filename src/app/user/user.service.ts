import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { CandidateResponse } from '../models/candidateresponse.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http:HttpClient) {}

  //private userUrl = 'http://localhost:8080/user-portal/user';
  //private userUrl = '/api';
  private userUrl = 'http://localhost:8080/interview/candidates';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public getCandidateResponse() {
    return this.http.get<CandidateResponse[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }

}
