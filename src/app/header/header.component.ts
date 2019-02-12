import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Globals } from '../globals';
import { CurrentUserService } from '../auth/user/current-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string;
  isAdmin: boolean;
  constructor(private authService: AuthService,
    private router: Router,
    private globals: Globals,
    private currentUser: CurrentUserService) { }

  ngOnInit() {
    this.username = this.currentUser.getUsername();
    this.isAdmin = this.currentUser.adminUser();
  }

  logout() {
    sessionStorage.removeItem(this.globals.sessionIdKey);
    this.authService.redirectUrl = '';
    this.router.navigate(['/login']);
  }

}
