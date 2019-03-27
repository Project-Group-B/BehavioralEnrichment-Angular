import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Globals } from '../globals';
import { CurrentUserService } from './user/current-user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private globals: Globals,
    private currentUser: CurrentUserService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isAdmin = (this.checkIsAdmin() && this.checkLoggedIn());

    if (isAdmin) {
      return true;
    } else {
      this.router.navigate(['/home']);
    }
    return false;
  }

  checkIsAdmin(): boolean {
    return this.currentUser.getUser().admin;
  }

  checkLoggedIn(): boolean {
    if (sessionStorage.getItem(this.globals.sessionIdKey)) {
      return true;
    }
  }
}
