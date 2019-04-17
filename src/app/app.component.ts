import { Component, OnInit } from '@angular/core';
import { Globals } from './globals';
import { UserInfo } from './shared/interfaces/user-info';
import { CurrentUserService } from './auth/user/current-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BehavioralEnrichment-Angular';

  constructor(private globals: Globals, private currentUser: CurrentUserService) {}

  ngOnInit() {
    const userInfo = JSON.parse(sessionStorage.getItem(this.globals.userInfoKey)) as UserInfo;
    if (userInfo) {
      this.currentUser.setUser(userInfo);
    }
  }
}
