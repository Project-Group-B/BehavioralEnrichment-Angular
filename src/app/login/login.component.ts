import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, UserInfo } from '../auth/auth.service';
import { MatSnackBar } from '@angular/material';
import { Globals } from '../globals';

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
    private globals: Globals) { }

  // https://angular.io/guide/reactive-forms
  ngOnInit() {
    if (sessionStorage.getItem(this.globals.sessionIdKey)) {
      this.router.navigate(['/home']);
    }
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      password: new FormControl('', Validators.required)
    });
    console.log(`global baseUrl value: ${this.globals.baseUrl}`);
  }

  logIn() {
    this.service.loginUser(this.loginForm.value.username, this.loginForm.value.password).subscribe((data: UserInfo) => {
      console.log(`session storage key: ${this.globals.sessionIdKey}`);
      console.log(`session id: ${data.sessionId}`);
      if (data.loggedIn) {
        sessionStorage.setItem(this.globals.sessionIdKey, data.sessionId);
        const redirect = this.service.redirectUrl ? this.service.redirectUrl : '/home';
        this.router.navigate([redirect]);
      } else {
        this.snackbar.open('Username or password invalid', 'OK', {
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
