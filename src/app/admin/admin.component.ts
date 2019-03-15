import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, NgForm, FormBuilder, Validators } from '@angular/forms';
import { DepartmentInfo } from '../shared/interfaces/department-info';
import { MatSnackBar, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { EnrichmentService } from '../shared/main/enrichment.service';
import { UserListInfo } from '../shared/interfaces/user-list-info';
import { SelectionModel } from '@angular/cdk/collections';
import { StandardReturnObject } from '../shared/interfaces/standard-return-object';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // Add User variables
  addUserForm: FormGroup;
  departments: DepartmentInfo[];

  // Remove User variables
  displayedColumns: string[] = ['select', 'id', 'username', 'firstName', 'lastName', 'department'];
  userSelection = new SelectionModel<UserListInfo>(true, []);
  dataSource: MatTableDataSource<UserListInfo>;

  // Department Variables
  newDeptName = '';
  deptIdToRemove: number;

  // ViewChild
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('username') usernameRef: ElementRef;
  @ViewChild('formDirective') private formDirective: NgForm;
  constructor(
    private service: EnrichmentService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar) {
      this.getUsers();
    }

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      department: new FormControl({departmentId: -1, departmentName: ''}, [Validators.required]),
      username: new FormControl('', [Validators.required, Validators.maxLength(25)])
    });
    this.getDepartments();
    this.getUsers();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.userSelection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.userSelection.clear() :
        this.dataSource.data.forEach(row => this.userSelection.select(row));
  }

  addUser() {
    this.service.addUser(this.addUserForm).subscribe((data: any) => {
      if (!data.error) {
        this.snackbar.open(data.message, 'OK', {
          duration: 3000
        });
        this.formDirective.resetForm();
        this.usernameRef.nativeElement.focus();
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

  getUsers(): void {
    this.service.getUsers().subscribe((data: UserListInfo[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, (err: any) => {
      console.error('Error getting users', err);
    });
  }

  removeUsers() {
    this.service.removeUsers(this.userSelection.selected).subscribe((data: StandardReturnObject) => {
      this.snackbar.open(data.error ? data.errorMsg : data.message, 'OK', {
        duration: 3000
      });
      this.userSelection.clear();
      this.getUsers();
    }, (err: any) => {
      console.error('error removing users:', err);
      this.snackbar.open('HTTP error when removing user(s). Please try again.', 'OK');
    });
  }

  addNewDepartment() {
    this.service.addDepartment(this.newDeptName).subscribe((data: StandardReturnObject) => {
      this.snackbar.open(data.error ? data.errorMsg : data.message, 'OK', {
        duration: 3000
      });
      this.newDeptName = '';
      this.getDepartments();
    }, (err: any) => {
      console.error('error adding new department:', err);
      this.snackbar.open('HTTP error adding new department', 'OK', {
        duration: 3000
      });
    });
  }

  removeDept() {
    this.service.removeDepartmentById(this.deptIdToRemove).subscribe((data: StandardReturnObject) => {
      this.snackbar.open(data.error ? data.errorMsg : data.message, 'OK', {
        duration: 3000
      });
      this.deptIdToRemove = null;
    }, (err: any) => {
      console.error(`error removing department with id ${this.deptIdToRemove}`, err);
      this.snackbar.open('HTTP error when removing department', 'OK', {
        duration: 3000
      });
    });
  }

  resetPasswords() {
    this.service.resetPasswords(this.userSelection.selected).subscribe((data: StandardReturnObject) => {
      this.snackbar.open(data.error ? data.errorMsg : data.message, 'OK', {
        duration: 3000
      });
      this.userSelection.clear();
    }, (err: any) => {
      console.error(`error resetting passwords:`, err);
      this.snackbar.open('HTTP error when resetting passwords', 'OK', {
        duration: 3000
      });
    });
  }

  private getDepartments() {
    this.service.getDepartments().subscribe((data: DepartmentInfo[]) => {
      this.departments = data;
    }, (err: any) => {
      console.error('Error getting departments:', err);
    });
  }

  getErrorMsg(formControlName: string): string {
    if (this.addUserForm.get(formControlName).hasError('required')) {
      return 'Input is required.';
    } else if (this.addUserForm.get(formControlName).hasError('maxlength')) {
      return 'Input exceeds max length.';
    } else {
      return 'Invalid input.';
    }
  }
}
