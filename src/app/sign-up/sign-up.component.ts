import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { MatSnackBar, ErrorStateMatcher } from '@angular/material';
import { EnrichmentService } from '../shared/main/enrichment.service';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  departments: DepartmentInfo[];
  constructor(
    private service: EnrichmentService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router) { }

  // https://stackoverflow.com/a/51606362
  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      department: new FormControl({departmentId: -1, departmentName: ''}, [Validators.required]),
      username: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('')
    }, {validator: this.checkPasswords});
    this.service.getDepartments().subscribe((data: DepartmentInfo[]) => {
      this.departments = data;
    }, (err: any) => {
      console.error('Error getting departments:', err);
    });
  }

  signUp() {
    this.service.signUp(this.signUpForm).subscribe((data: any) => {
      if (!data.error) {
        this.snackbar.open(data.message, 'OK', {
          duration: 3000
        });
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      } else {
        this.snackbar.open(data.errorMsg, 'OK', {
          duration: 5000
        });
      }
    }, (err: any) => {
      this.snackbar.open('Error signing up', 'OK', {
        duration: 3000
      });
      console.error('Error signing up user:', err);
    });
  }

  getErrorMsg(formControlName: string): string {
    if (this.signUpForm.get(formControlName).hasError('required')) {
      return 'Input is required.';
    } else if (this.signUpForm.get(formControlName).hasError('maxlength')) {
      return 'Input exceeds max length.';
    } else {
      return 'Invalid input.';
    }
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true };
  }

}
