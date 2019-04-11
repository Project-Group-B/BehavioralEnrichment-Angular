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
  readonly baseUrl = 'http://ec2-3-84-52-67.compute-1.amazonaws.com:8080';
}
