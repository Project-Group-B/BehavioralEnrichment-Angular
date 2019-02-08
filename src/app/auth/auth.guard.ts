import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router, private globals: Globals) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('AuthGuard#canActivate()');
      const url: string = state.url;

      return this.checkLogIn(url);
  }

  checkLogIn(url: string): boolean {
    if (sessionStorage.getItem(this.globals.sessionIdKey)) {
      return true;
    }

    this.service.redirectUrl = url;

    this.router.navigate(['/login']);
    return false;
  }
}
