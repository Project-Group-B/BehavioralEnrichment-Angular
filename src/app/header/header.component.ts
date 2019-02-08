import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private globals: Globals) { }

  ngOnInit() {
  }

  logout() {
    sessionStorage.removeItem(this.globals.sessionIdKey);
    this.authService.redirectUrl = '';
    this.router.navigate(['/login']);
  }

}
