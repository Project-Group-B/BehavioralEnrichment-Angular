import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MatSnackBar } from '@angular/material';
import { Globals } from '../globals';
import UserInfo from '../shared/interfaces/user-info';
import { CurrentUserService } from '../auth/user/current-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private service: AuthService,
    private snackbar: MatSnackBar,
    private formBuilder: FormBuilder,
    private globals: Globals,
    private currentUser: CurrentUserService) { }

  // https://angular.io/guide/reactive-forms
  ngOnInit() {
    if (sessionStorage.getItem(this.globals.sessionIdKey)) {
      this.router.navigate(['/home']);
    }
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      password: new FormControl('', Validators.required)
    });
  }

  logIn() {
    this.service.loginUser(this.loginForm.value.username, this.loginForm.value.password).subscribe((data: UserInfo) => {
      if (data.loggedIn) {
        // set current user info; will not be available on refresh
        // TODO: store user info in session storage as stringified JSON
        // TODO: in app.component.ts#ngOnInit(), set current user to data from session storage
        this.currentUser.setIsAdmin(data.admin);
        this.currentUser.setUserName(data.username);
        this.currentUser.setSessionId(data.sessionId);
        this.currentUser.setPermissions(data.permissions);
        this.currentUser.setDepartmentId(data.departmentId);
        this.currentUser.setFirstName(data.firstName);
        this.currentUser.setLastName(data.lastName);

        // put session id in session storage to track user
        sessionStorage.setItem(this.globals.sessionIdKey, data.sessionId);
        const redirect = this.service.redirectUrl ? this.service.redirectUrl : '/home';
        this.router.navigate([redirect]);
      } else {
        this.snackbar.open(data.errorMsg, 'OK', {
          duration: 3000
        });
      }
    }, error => {
      this.snackbar.open('Error logging in', 'OK', {
        duration: 3000
      });
      console.error('Error logging in: ', error);
    });
  }

  getUsernameErrorMessage(): string {
    if (this.loginForm.get('username').hasError('required')) {
      return 'Username is required';
    } else if (this.loginForm.get('username').hasError('maxlength')) {
      return 'Must be between 1 and 15 characters';
    } else {
      return 'Invalid username';
    }
  }

}
