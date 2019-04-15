import { Injectable } from '@angular/core';
import { UserInfo } from 'src/app/shared/interfaces/user-info';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  private user: UserInfo;

  constructor() { }

  setUser(user: UserInfo) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }
}
