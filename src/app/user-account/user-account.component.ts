import { Component, OnInit, ViewChild } from '@angular/core';
import { EnrichmentService } from '../shared/main/enrichment.service';
import { CurrentUserService } from '../auth/user/current-user.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { StandardReturnObject } from '../shared/interfaces/standard-return-object';

export class PasswordErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  userFirstName: string;
  userLastName: string;
  userName: string;
  userDepartment: string;
  changePasswordToggle = false;
  changePasswordForm: FormGroup;
  matcher = new PasswordErrorStateMatcher();

  // ViewChild
  @ViewChild('formDirective') private formDirective: NgForm;
  constructor(
    private service: EnrichmentService,
    private currentUser: CurrentUserService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar
  ) {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      newPassword: new FormControl('', [Validators.required]),
      newPassword2: new FormControl('', [Validators.required])
    }, {validator: this.checkPasswords});
  }

  ngOnInit() {
    this.userFirstName = this.currentUser.getUser().firstName;
    this.userLastName = this.currentUser.getUser().lastName;
    this.userName = this.currentUser.getUser().username;
    this.userDepartment = this.currentUser.getUser().department;
  }

  changePassword() {
    this.service.changePassword(
      this.currentUser.getUser().id,
      this.userName,
      this.changePasswordForm
    ).subscribe((data: StandardReturnObject) => {
      this.snackbar.open(data.error ? data.errorMsg : data.message, 'OK', {
        duration: 3000
      });
      this.formDirective.reset();
      this.changePasswordToggle = false;
    }, (err: any) => {
      this.snackbar.open('HTTP error when changing passwords', 'OK', {
        duration: 3000
      });
      console.error('error changing passwords:', err);
    });
  }

  toggleChangePassword(isOpen: boolean) {
    this.changePasswordToggle = isOpen;
    this.formDirective.resetForm();
  }

  getErrorMsg(formControlName: string): string {
    if (this.changePasswordForm.get(formControlName).hasError('required')) {
      return 'Input is required.';
    } else if (this.changePasswordForm.get(formControlName).hasError('maxlength')) {
      return 'Input exceeds max length.';
    } else if (this.changePasswordForm.get(formControlName).hasError('notSame')) {
      return 'New passwords need to match';
    } else {
      return 'Invalid input.';
    }
  }

  private checkPasswords(group: FormGroup) {
    const pass = group.controls.newPassword.value;
    const confirmPass = group.controls.newPassword2.value;

    return pass === confirmPass ? null : { notSame: true };
  }
}
