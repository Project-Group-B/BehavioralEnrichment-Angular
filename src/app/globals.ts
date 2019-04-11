import { Injectable } from '@angular/core';
import { CurrentUserService } from './auth/user/current-user.service';
import { UserInfo } from './shared/interfaces/user-info';

// To change in a file, create a function and set it to something like this:
/*
import {Globals} from '...';
constructor(private globals: Globals)
private changed() {
  this.globals.baseUrl = '';
}
*/
@Injectable({
  providedIn: 'root'
})
export class Globals {
  readonly sessionIdKey = 'behavior-enrichment-session';
<<<<<<< HEAD
  readonly userInfoKey = 'behavior-enrichment-user-info';
  readonly baseUrl = 'http://localhost:8080';
  constructor(private currentUser: CurrentUserService) {}

  public setCurrentUser(info: UserInfo) {
    this.currentUser.setUser(info);
  }
=======
  readonly baseUrl = 'http://ec2-54-164-31-35.compute-1.amazonaws.com:8080';
>>>>>>> ZachBranchAngular
}
