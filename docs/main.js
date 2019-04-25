(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<h1 class=\"mat-display-1 center-align\">Admin Page</h1>\r\n<mat-tab-group>\r\n  <mat-tab label=\"Add User\">\r\n    <form class=\"form-css\" [formGroup]=\"addUserForm\" #newUserFormDirective=\"ngForm\" (ngSubmit)=\"addUser()\">\r\n      <mat-form-field class=\"full-width\" hintLabel=\"Max 50 characters\">\r\n        <input #username matInput formControlName=\"firstName\" type=\"text\" placeholder=\"User first Name\" required/>\r\n        <mat-hint align=\"end\">{{addUserForm.get('firstName').value?.length || 0}}/50</mat-hint>\r\n        <mat-error *ngIf=\"addUserForm.get('firstName').invalid\">{{getErrorMsg('firstName')}}</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"full-width\" hintLabel=\"Max 45 characters\">\r\n        <input matInput formControlName=\"lastName\" type=\"text\" placeholder=\"User Last Name\" required/>\r\n        <mat-hint align=\"end\">{{addUserForm.get('lastName').value?.length || 0}}/45</mat-hint>\r\n        <mat-error *ngIf=\"addUserForm.get('lastName').invalid\">{{getErrorMsg('lastName')}}</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"full-width\" hintLabel=\"Select a department\">\r\n        <mat-select placeholder=\"Department\" formControlName=\"department\" required>\r\n          <mat-option *ngFor=\"let dept of departments\" [value]=\"dept\">\r\n            {{dept.departmentName}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"full-width\" hintLabel=\"Max 15 characters\">\r\n        <input matInput formControlName=\"username\" type=\"text\" placeholder=\"Username\" required/>\r\n        <mat-hint align=\"end\">{{addUserForm.get('username').value?.length || 0}}/25</mat-hint>\r\n        <mat-error *ngIf=\"addUserForm.get('username').invalid\">{{getErrorMsg('username')}}</mat-error>\r\n      </mat-form-field>\r\n      <p>Default user password will be: '{{addUserForm.get('firstName').value?.toLowerCase().substring(0, 1)}}{{addUserForm.get('lastName').value?.toLowerCase().substring(0, 5)}}'</p>\r\n      <button type=\"submit\" style=\"display:none\" [disabled]=\"!addUserForm.valid\"></button>\r\n    </form>\r\n    <button mat-raised-button (click)=\"addUser()\" color=\"primary\" [disabled]=\"!addUserForm.valid\">Add User</button>\r\n  </mat-tab>\r\n  <mat-tab label=\"User Actions\">\r\n    <mat-form-field class=\"max-width\">\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n    <button class=\"button-margin\" mat-raised-button (click)=\"deactivateUsers()\" color=\"warn\" \r\n      [disabled]=\"userSelection.selected.length === 0\" matTooltip=\"User accounts will be deactivated\">Deactivate User(s)</button>\r\n    <button class=\"button-margin\" mat-raised-button (click)=\"reactivateUsers()\" [disabled]=\"userSelection.selected.length === 0\">Reactivate User(s)</button>\r\n    <button class=\"button-margin\" mat-raised-button matTooltip=\"Resets selected user passwords to their default\" \r\n      [disabled]=\"userSelection.selected.length === 0\" (click)=\"resetPasswords()\">Reset User Passwords</button>\r\n    <button class=\"button-margin\" mat-raised-button (click)=\"getUsers(true)\" matTooltip=\"Gets the list of users again\">Reload Data</button>\r\n    <mat-checkbox name=\"showDeactivatedUsers\" id=\"showDeactivatedUsers\" class=\"button-margin\" [(ngModel)]=\"displayInactive\">Show Deactivated Users</mat-checkbox>\r\n    <div class=\"mat-elevation-z8\">\r\n      <table mat-table [dataSource]=\"dataSource\" matSort>\r\n        <ng-container matColumnDef=\"select\">\r\n          <th mat-header-cell *matHeaderCellDef>\r\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                          [checked]=\"userSelection.hasValue() && isAllSelected()\"\r\n                          [indeterminate]=\"userSelection.hasValue() && !isAllSelected()\">\r\n            </mat-checkbox>\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let row\">\r\n            <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                          (change)=\"$event ? userSelection.toggle(row) : null\"\r\n                          [checked]=\"userSelection.isSelected(row)\"\r\n                          [disabled]=\"row.userStatus == 1\">\r\n            </mat-checkbox>\r\n          </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"id\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>User ID </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.userId}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"username\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Username </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.username}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"firstName\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>First Name</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.firstName}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"lastName\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.lastName}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"department\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Department</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.department}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"status\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>User Status</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.userStatus}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"editButton\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Edit User</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <button mat-raised-button (click)=\"openEditUserDialog(element)\">Edit User</button>\r\n          </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row\r\n          *matRowDef=\"let row; columns: displayedColumns;\"\r\n          [hidden]=\"row.userStatus == 2 && !displayInactive\"\r\n          [ngClass]=\"{'admin-row': row.userStatus == 1, 'deactivated-row': row.userStatus == 2}\"></tr>\r\n      </table>\r\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Additions/Deletions\">\r\n    <mat-form-field class=\"max-width\">\r\n      <input matInput [(ngModel)]=\"newDeptName\" placeholder=\"New Department Name\">\r\n      <mat-hint align=\"end\">{{newDeptName.length || 0}}/50</mat-hint>\r\n    </mat-form-field>\r\n    <button class=\"button-margin\" [disabled]=\"!newDeptName || newDeptName.length > 50\" (click)=\"addNewDepartment()\" mat-raised-button color=\"primary\">Add Department</button>\r\n    <br/>\r\n    <mat-form-field hintLabel=\"Select a department to remove\">\r\n      <mat-select placeholder=\"Department\" [(ngModel)]=\"deptIdToRemove\">\r\n        <mat-option *ngFor=\"let dept of departments\" [value]=\"dept.departmentId\">\r\n          {{dept.departmentName}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <button class=\"button-margin\" [disabled]=\"!deptIdToRemove\" (click)=\"removeDept()\" mat-raised-button color=\"primary\">Remove Department</button>\r\n    <mat-divider></mat-divider>\r\n    <form class=\"form-css\" [formGroup]=\"newSpeciesForm\" #newSpeciesFormDirective=\"ngForm\" (ngSubmit)=\"addNewSpecies()\">\r\n      <mat-form-field class=\"max-width\" hintLabel=\"Max 50 characters\">\r\n        <input matInput formControlName=\"speciesName\" type=\"text\" placeholder=\"New Species Name\" required>\r\n        <mat-hint align=\"end\">{{newSpeciesForm.get('speciesName').value?.length || 0}}/50</mat-hint>\r\n        <mat-error *ngIf=\"newSpeciesForm.get('speciesName').invalid\">Invalid Species Name</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"max-width\" hintLabel=\"Max 500 characters\">\r\n        <textarea matInput formControlName=\"speciesDescription\" type=\"text\" placeholder=\"New Species Description\" required></textarea>\r\n        <mat-hint align=\"end\">{{newSpeciesForm.get('speciesDescription').value?.length || 0}}/500</mat-hint>\r\n        <mat-error *ngIf=\"newSpeciesForm.get('speciesDescription').invalid\">Invalid Species Description</mat-error>\r\n      </mat-form-field>\r\n      <button type=\"submit\" style=\"display:none\" [disabled]=\"!newSpeciesForm.valid\"></button>\r\n    </form>\r\n    <button [disabled]=\"!newSpeciesForm.valid\" (click)=\"addNewSpecies()\" mat-raised-button color=\"primary\">Add Species</button>\r\n    <mat-divider></mat-divider>\r\n    <mat-form-field hintLabel=\"Select a species to remove\">\r\n      <mat-select placeholder=\"Species\" [(ngModel)]=\"speciesIdToRemove\">\r\n        <mat-option *ngFor=\"let spec of species\" [value]=\"spec.speciesId\">\r\n          {{spec.speciesName}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <button class=\"button-margin\" [disabled]=\"!speciesIdToRemove\" (click)=\"removeSpecies()\" mat-raised-button color=\"primary\">Remove Species</button>\r\n    <mat-divider></mat-divider>\r\n    <form class=\"form-css\" [formGroup]=\"newCategoryForm\" #newCategoryFormDirective=\"ngForm\" (ngSubmit)=\"addNewCategory()\">\r\n        <mat-form-field class=\"max-width\" hintLabel=\"Max 25 characters\">\r\n          <input matInput formControlName=\"catName\" type=\"text\" placeholder=\"New Category Name\" required>\r\n          <mat-hint align=\"end\">{{newCategoryForm.get('catName').value?.length || 0}}/25</mat-hint>\r\n          <mat-error *ngIf=\"newCategoryForm.get('catName').invalid\">Invalid Category Name</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"max-width\" hintLabel=\"Max 500 characters\">\r\n          <textarea matInput formControlName=\"catDescription\" type=\"text\" placeholder=\"New Category Description\" required></textarea>\r\n          <mat-hint align=\"end\">{{newCategoryForm.get('catDescription').value?.length || 0}}/500</mat-hint>\r\n          <mat-error *ngIf=\"newCategoryForm.get('catDescription').invalid\">Invalid Category Description</mat-error>\r\n        </mat-form-field>\r\n        <button type=\"submit\" style=\"display:none\" [disabled]=\"!newCategoryForm.valid\"></button>\r\n      </form>\r\n      <button [disabled]=\"!newCategoryForm.valid\" (click)=\"addNewCategory()\" mat-raised-button color=\"primary\">Add Category</button>\r\n    <mat-divider></mat-divider>  \r\n    <form [formGroup]=\"homepageImageForm\">\r\n      <label for=\"homepagePicture\">Upload new home page picture:</label>\r\n      <input type=\"file\" (change)=\"onHomepageFileChange($event)\" accept=\"{.png,.jpg,.jpeg}\"/>\r\n      <button (click)=\"uploadNewHomepageImage()\" matTooltip=\"WARNING: will replace current home page image\" \r\n        color=\"warn\" mat-raised-button>Upload Image</button>\r\n    </form>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.table-container {\n  position: relative;\n  max-height: 400px;\n  overflow: auto; }\n\n.max-width {\n  width: 100%; }\n\ntd, th {\n  width: 10%; }\n\n.button-margin {\n  margin-left: 20px; }\n\n.admin-row {\n  background-color: #75a4ef; }\n\n.deactivated-row {\n  background-color: rgba(128, 128, 128, 0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vQzpcXFVzZXJzXFxaYWNoXFxEb2N1bWVudHNcXGFTcHJpbmcyMDE5XFxDYXBzdG9uZVxcUEdCLUFuZ3VsYXJcXEJlaGF2aW9yYWxFbnJpY2htZW50LUFuZ3VsYXIvc3JjXFxhcHBcXGFkbWluXFxhZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLDBDQUFtQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5tYXgtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbnRkLCB0aCB7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG4uYnV0dG9uLW1hcmdpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLmFkbWluLXJvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1YTRlZjtcclxufVxyXG4uZGVhY3RpdmF0ZWQtcm93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogZ3JheSwgJGFscGhhOiAwLjUpXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent, EditUserInfoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserInfoDialogComponent", function() { return EditUserInfoDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_main_enrichment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/main/enrichment.service */ "./src/app/shared/main/enrichment.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");






var AdminComponent = /** @class */ (function () {
    function AdminComponent(service, formBuilder, snackbar, dialog) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
        this.dialog = dialog;
        // Deactivate User variables
        this.displayedColumns = ['select', 'id', 'username', 'firstName', 'lastName', 'department', 'status', 'editButton'];
        this.userSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        this.displayInactive = false;
        // Department Variables
        this.newDeptName = '';
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.addUserForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
            department: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ departmentId: -1, departmentName: '' }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)])
        });
        this.homepageImageForm = this.formBuilder.group({
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.newSpeciesForm = this.formBuilder.group({
            speciesName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            speciesDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)])
        });
        this.newCategoryForm = this.formBuilder.group({
            catName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]),
            catDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)])
        });
        this.getDepartments();
        this.getUsers(false);
        this.getSpecies();
    };
    AdminComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    /** Whether the number of selected elements matches the total number of rows. */
    AdminComponent.prototype.isAllSelected = function () {
        var numSelected = this.userSelection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    AdminComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.userSelection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.userSelection.select(row); });
    };
    AdminComponent.prototype.addUser = function () {
        var _this = this;
        this.service.addUser(this.addUserForm).subscribe(function (data) {
            if (!data.error) {
                _this.snackbar.open(data.message, 'OK', {
                    duration: 3000
                });
                _this.newUserformDirective.resetForm();
                _this.usernameRef.nativeElement.focus();
            }
            else {
                _this.snackbar.open(data.errorMsg, 'OK', {
                    duration: 5000
                });
            }
        }, function (err) {
            _this.snackbar.open('Error signing up', 'OK', {
                duration: 3000
            });
            console.error('Error signing up user:', err);
        });
    };
    AdminComponent.prototype.getUsers = function (showSnackbar) {
        var _this = this;
        this.service.getUsers().subscribe(function (data) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            if (showSnackbar) {
                _this.snackbar.open('Successfully retrieved users.', 'OK', {
                    duration: 2000
                });
            }
        }, function (err) {
            console.error('Error getting users', err);
        });
    };
    AdminComponent.prototype.deactivateUsers = function () {
        var _this = this;
        this.service.deactivateUsers(this.userSelection.selected).subscribe(function (data) {
            _this.snackbar.open(data.error ? data.errorMsg : data.message, 'OK', {
                duration: 3000
            });
            _this.userSelection.clear();
            _this.getUsers(false);
            _this.displayInactive = false;
        }, function (err) {
            console.error('error deactivating users:', err);
            _this.snackbar.open('HTTP error when deactivating user(s). Please try again.', 'OK');
        });
    };
    AdminComponent.prototype.reactivateUsers = function () {
        var _this = this;
        this.service.reactivateUsers(this.userSelection.selected).subscribe(function (data) {
            _this.snackbar.open(data.error ? data.errorMsg : data.message, 'OK', {
                duration: 3000
            });
            _this.userSelection.clear();
            _this.getUsers(false);
        }, function (err) {
            console.error('error reactivating users:', err);
            _this.snackbar.open('HTTP error when reactivating user(s). Please try again.', 'OK');
        });
    };
    AdminComponent.prototype.addNewDepartment = function () {
        var _this = this;
        if (this.newDeptName.length <= 0 || this.newDeptName.length > 50) {
            this.snackbar.open('Department Name must be between 1 and 50 characters', 'OK', {
                duration: 3000
            });
            return;
        }
        this.service.addDepartment(this.newDeptName).subscribe(function (data) {
            _this.snackbar.open(data.error ? data.errorMsg : data.message, 'OK', {
                duration: 3000
            });
            _this.newDeptName = '';
            _this.getDepartments();
        }, function (err) {
            console.error('error adding new department:', err);
            _this.snackbar.open('HTTP error adding new department', 'OK', {
                duration: 3000
            });
        });
    };
    AdminComponent.prototype.removeDept = function () {
        var _this = this;
        this.service.removeDepartmentById(this.deptIdToRemove).subscribe(function (data) {
            _this.snackbar.open(data.error ? data.errorMsg : data.message, 'OK', {
                duration: 3000
            });
            _this.deptIdToRemove = null;
        }, function (err) {
            console.error("error removing department with id " + _this.deptIdToRemove, err);
            _this.snackbar.open('HTTP error when removing department', 'OK', {
                duration: 3000
            });
        });
    };
    AdminComponent.prototype.getSpecies = function () {
        var _this = this;
        this.service.getSpecies().subscribe(function (data) {
            _this.species = data;
        }, function (err) {
            _this.snackbar.open('HTTP error getting species. Please reload the page.', 'OK', {
                duration: 3000
            });
        });
    };
    AdminComponent.prototype.addNewSpecies = function () {
        var _this = this;
        this.service.addSpecies(this.newSpeciesForm).subscribe(function (data) {
            _this.snackbar.open(data.error ? data.errorMsg : data.message, 'OK', {
                duration: 3000
            });
            if (!data.error) {
                _this.newSpeciesFormDirective.resetForm();
                _this.getSpecies();
            }
        }, function (err) {
            _this.snackbar.open('HTTP error when adding species. Please try again.', 'OK', {
                duration: 3000
            });
        });
    };
    AdminComponent.prototype.removeSpecies = function () {
        var _this = this;
        this.service.removeSpeciesbyId(this.speciesIdToRemove).subscribe(function (data) {
            _this.snackbar.open(data.error ? data.errorMsg : data.message, 'OK', {
                duration: 3000
            });
            _this.speciesIdToRemove = null;
            _this.getSpecies();
        }, function (err) {
            _this.snackbar.open('HTTP error when removing species. Please try again.', 'OK', {
                duration: 3000
            });
        });
    };
    AdminComponent.prototype.addNewCategory = function () {
        var _this = this;
        this.service.addCategory(this.newCategoryForm).subscribe(function (data) {
            _this.snackbar.open(data.error ? data.errorMsg : data.message, 'OK', {
                duration: 3000
            });
            if (!data.error) {
                _this.newCategoryFormDirective.resetForm();
            }
        }, function (err) {
            _this.snackbar.open('HTTP error when adding new category. Please try again.', 'OK', {
                duration: 3000
            });
        });
    };
    AdminComponent.prototype.resetPasswords = function () {
        var _this = this;
        this.service.resetPasswords(this.userSelection.selected).subscribe(function (data) {
            _this.snackbar.open(data.error ? data.errorMsg : data.message, 'OK', {
                duration: 3000
            });
            _this.userSelection.clear();
        }, function (err) {
            console.error("error resetting passwords:", err);
            _this.snackbar.open('HTTP error when resetting passwords', 'OK', {
                duration: 3000
            });
        });
    };
    AdminComponent.prototype.uploadNewHomepageImage = function () {
        var _this = this;
        this.service.uploadNewHomepageImage(this.homepageImageForm).subscribe(function (data) {
            _this.snackbar.open(data.error ? data.errorMsg : data.message, 'OK', {
                duration: 3000
            });
        }, function (err) {
            console.error('HTTP error when uploading image:');
            console.error(err);
            _this.snackbar.open('HTTP error when uploading image; please try again', 'OK', {
                duration: 5000
            });
        });
    };
    AdminComponent.prototype.onHomepageFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            var file = event.target.files[0];
            reader.onloadend = function () {
                // Sets value to Base64 encoded string
                _this.homepageImageForm.patchValue({
                    image: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };
    AdminComponent.prototype.getDepartments = function () {
        var _this = this;
        this.service.getDepartments().subscribe(function (data) {
            _this.departments = data;
        }, function (err) {
            console.error('Error getting departments:', err);
        });
    };
    AdminComponent.prototype.getErrorMsg = function (formControlName) {
        if (this.addUserForm.get(formControlName).hasError('required')) {
            return 'Input is required.';
        }
        else if (this.addUserForm.get(formControlName).hasError('maxlength')) {
            return 'Input exceeds max length.';
        }
        else {
            return 'Invalid input.';
        }
    };
    AdminComponent.prototype.openEditUserDialog = function (userToEdit) {
        var _this = this;
        console.log('will edit user:');
        console.log(userToEdit);
        var editUserInfo = {
            firstName: userToEdit.firstName,
            lastName: userToEdit.lastName,
            userName: userToEdit.username,
            userId: userToEdit.userId,
            department: this.departments.find(function (x) { return x.departmentName === userToEdit.department; }),
            allDepartments: this.departments
        };
        var editUserDialogRef = this.dialog.open(EditUserInfoDialogComponent, { data: editUserInfo });
        editUserDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.getUsers(false);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], AdminComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], AdminComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('username'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AdminComponent.prototype, "usernameRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newUserFormDirective'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], AdminComponent.prototype, "newUserformDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newSpeciesFormDirective'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], AdminComponent.prototype, "newSpeciesFormDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newCategoryFormDirective'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], AdminComponent.prototype, "newCategoryFormDirective", void 0);
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_main_enrichment_service__WEBPACK_IMPORTED_MODULE_4__["EnrichmentService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AdminComponent);
    return AdminComponent;
}());

var EditUserInfoDialogComponent = /** @class */ (function () {
    function EditUserInfoDialogComponent(dialogRef, data, snackbar, service, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackbar = snackbar;
        this.service = service;
        this.formBuilder = formBuilder;
        this.editUserForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.lastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
            department: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.department, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.userName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]),
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.userId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.editUserDepartments = data.allDepartments;
        this.usernameToEdit = data.userName;
    }
    EditUserInfoDialogComponent.prototype.cancel = function () {
        this.dialogRef.close(false);
    };
    EditUserInfoDialogComponent.prototype.editUser = function () {
        var _this = this;
        this.service.editUser(this.editUserForm).subscribe(function (data) {
            _this.snackbar.open(data.error ? data.errorMsg : data.message, 'OK', {
                duration: 3000
            });
            if (!data.error) {
                _this.dialogRef.close(true);
            }
        }, function (err) {
            console.error('Error editing user info:');
            console.error(err);
            _this.snackbar.open('HTTP error when editing user. Please try again.', 'OK', {
                duration: 2000
            });
        });
    };
    EditUserInfoDialogComponent.prototype.getErrorMsg = function (formControlName) {
        if (this.editUserForm.get(formControlName).hasError('required')) {
            return 'Input is required.';
        }
        else if (this.editUserForm.get(formControlName).hasError('maxlength')) {
            return 'Input exceeds max length.';
        }
        else if (this.editUserForm.get(formControlName).hasError('pattern')) {
            return 'Input must be a number.';
        }
        else {
            return 'Invalid input.';
        }
    };
    EditUserInfoDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-user-info-dialog',
            template: __webpack_require__(/*! ./edit-user-info-dialog.html */ "./src/app/admin/edit-user-info-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _shared_main_enrichment_service__WEBPACK_IMPORTED_MODULE_4__["EnrichmentService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditUserInfoDialogComponent);
    return EditUserInfoDialogComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit-user-info-dialog.html":
/*!**************************************************!*\
  !*** ./src/app/admin/edit-user-info-dialog.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Edit User '{{usernameToEdit}}'</h1>\r\n\r\n<div mat-dialog-content>\r\n  <form class=\"form-css\" [formGroup]=\"editUserForm\" #formDirective=\"ngForm\" (ngSubmit)=\"editUser()\">\r\n    <mat-form-field class=\"full-width\" hintLabel=\"Max 50 characters\">\r\n      <input #username matInput formControlName=\"firstName\" type=\"text\" placeholder=\"User first Name\" required/>\r\n      <mat-hint align=\"end\">{{editUserForm.get('firstName').value?.length || 0}}/50</mat-hint>\r\n      <mat-error *ngIf=\"editUserForm.get('firstName').invalid\">{{getErrorMsg('firstName')}}</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width\" hintLabel=\"Max 45 characters\">\r\n      <input matInput formControlName=\"lastName\" type=\"text\" placeholder=\"User Last Name\" required/>\r\n      <mat-hint align=\"end\">{{editUserForm.get('lastName').value?.length || 0}}/45</mat-hint>\r\n      <mat-error *ngIf=\"editUserForm.get('lastName').invalid\">{{getErrorMsg('lastName')}}</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width\" hintLabel=\"Select a department\">\r\n      <mat-select placeholder=\"Department\" formControlName=\"department\" required>\r\n        <mat-option *ngFor=\"let dept of editUserDepartments\" [value]=\"dept\">\r\n          {{dept.departmentName}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width\" hintLabel=\"Max 15 characters\">\r\n      <input matInput formControlName=\"username\" type=\"text\" placeholder=\"Username\" required/>\r\n      <mat-hint align=\"end\">{{editUserForm.get('username').value?.length || 0}}/25</mat-hint>\r\n      <mat-error *ngIf=\"editUserForm.get('username').invalid\">{{getErrorMsg('username')}}</mat-error>\r\n    </mat-form-field>\r\n    <button type=\"submit\" style=\"display:none\" [disabled]=\"!editUserForm.valid\"></button>\r\n  </form>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button (click)=\"cancel()\" color=\"accent\">Cancel</button>\r\n  <button mat-raised-button style=\"margin-left: 20px;\" type=\"submit\" (click)=\"editUser()\" matTooltip=\"Will override current user details\" [disabled]=\"!editUserForm.valid\">Edit User</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _request_form_request_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-form/request-form.component */ "./src/app/request-form/request-form.component.ts");
/* harmony import */ var _request_form_status_request_form_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-form-status/request-form-status.component */ "./src/app/request-form-status/request-form-status.component.ts");
/* harmony import */ var _incident_report_incident_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./incident-report/incident-report.component */ "./src/app/incident-report/incident-report.component.ts");
/* harmony import */ var _incident_report_status_incident_report_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./incident-report-status/incident-report-status.component */ "./src/app/incident-report-status/incident-report-status.component.ts");
/* harmony import */ var _master_approved_master_approved_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./master-approved/master-approved.component */ "./src/app/master-approved/master-approved.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/admin.guard */ "./src/app/auth/admin.guard.ts");
/* harmony import */ var _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-account/user-account.component */ "./src/app/user-account/user-account.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");















// https://angular.io/guide/router#milestone-5-route-guards
var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'home', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'request-form', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _request_form_request_form_component__WEBPACK_IMPORTED_MODULE_4__["RequestFormComponent"] },
    { path: 'request-form-status', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _request_form_status_request_form_status_component__WEBPACK_IMPORTED_MODULE_5__["RequestFormStatusComponent"] },
    { path: 'incident-report', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _incident_report_incident_report_component__WEBPACK_IMPORTED_MODULE_6__["IncidentReportComponent"] },
    { path: 'incident-report-status', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _incident_report_status_incident_report_status_component__WEBPACK_IMPORTED_MODULE_7__["IncidentReportStatusComponent"] },
    { path: 'master-approved', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _master_approved_master_approved_component__WEBPACK_IMPORTED_MODULE_8__["MasterApprovedComponent"] },
    { path: 'admin', canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_12__["AdminGuard"]], component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"] },
    { path: 'account', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_13__["UserAccountComponent"] },
    { path: 'help', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _help_help_component__WEBPACK_IMPORTED_MODULE_14__["HelpComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _auth_user_current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/user/current-user.service */ "./src/app/auth/user/current-user.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(globals, currentUser) {
        this.globals = globals;
        this.currentUser = currentUser;
        this.title = 'BehavioralEnrichment-Angular';
    }
    AppComponent.prototype.ngOnInit = function () {
        var userInfo = JSON.parse(sessionStorage.getItem(this.globals.userInfoKey));
        if (userInfo) {
            this.currentUser.setUser(userInfo);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"], _auth_user_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _request_form_request_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./request-form/request-form.component */ "./src/app/request-form/request-form.component.ts");
/* harmony import */ var _request_form_status_request_form_status_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./request-form-status/request-form-status.component */ "./src/app/request-form-status/request-form-status.component.ts");
/* harmony import */ var _incident_report_incident_report_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./incident-report/incident-report.component */ "./src/app/incident-report/incident-report.component.ts");
/* harmony import */ var _incident_report_status_incident_report_status_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./incident-report-status/incident-report-status.component */ "./src/app/incident-report-status/incident-report-status.component.ts");
/* harmony import */ var _master_approved_master_approved_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./master-approved/master-approved.component */ "./src/app/master-approved/master-approved.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./user-account/user-account.component */ "./src/app/user-account/user-account.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");





// for table displays








































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_31__["HomeComponent"],
                _request_form_request_form_component__WEBPACK_IMPORTED_MODULE_32__["RequestFormComponent"],
                _request_form_status_request_form_status_component__WEBPACK_IMPORTED_MODULE_33__["RequestFormStatusComponent"],
                _incident_report_incident_report_component__WEBPACK_IMPORTED_MODULE_34__["IncidentReportComponent"],
                _incident_report_status_incident_report_status_component__WEBPACK_IMPORTED_MODULE_35__["IncidentReportStatusComponent"],
                _master_approved_master_approved_component__WEBPACK_IMPORTED_MODULE_36__["MasterApprovedComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_38__["HeaderComponent"],
                _request_form_request_form_component__WEBPACK_IMPORTED_MODULE_32__["InsertNewItemDialogComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_41__["AdminComponent"],
                _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_42__["UserAccountComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_43__["HelpComponent"],
                _request_form_request_form_component__WEBPACK_IMPORTED_MODULE_32__["InsertNewAnimalDialogComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_41__["EditUserInfoDialogComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_38__["AboutDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_39__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_37__["FormsModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_37__["ReactiveFormsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatExpansionModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__["MatDividerModule"]
            ],
            entryComponents: [
                _request_form_request_form_component__WEBPACK_IMPORTED_MODULE_32__["InsertNewItemDialogComponent"],
                _request_form_request_form_component__WEBPACK_IMPORTED_MODULE_32__["InsertNewAnimalDialogComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_41__["EditUserInfoDialogComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_38__["AboutDialogComponent"]
            ],
            providers: [_globals__WEBPACK_IMPORTED_MODULE_40__["Globals"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/admin.guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth/admin.guard.ts ***!
  \*************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _user_current_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/current-user.service */ "./src/app/auth/user/current-user.service.ts");





var AdminGuard = /** @class */ (function () {
    function AdminGuard(globals, currentUser, router) {
        this.globals = globals;
        this.currentUser = currentUser;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        var isAdmin = (this.checkIsAdmin() && this.checkLoggedIn());
        if (isAdmin) {
            return true;
        }
        else {
            this.router.navigate(['/home']);
        }
        return false;
    };
    AdminGuard.prototype.checkIsAdmin = function () {
        return this.currentUser.getUser().admin;
    };
    AdminGuard.prototype.checkLoggedIn = function () {
        if (sessionStorage.getItem(this.globals.sessionIdKey)) {
            return true;
        }
    };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"],
            _user_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(service, router, globals) {
        this.service = service;
        this.router = router;
        this.globals = globals;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var url = state.url;
        return this.checkLogIn(url);
    };
    AuthGuard.prototype.checkLogIn = function (url) {
        if (sessionStorage.getItem(this.globals.sessionIdKey)) {
            return true;
        }
        this.service.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, globals) {
        this.http = http;
        this.globals = globals;
    }
    // https://stackoverflow.com/a/53528644
    AuthService.prototype.loginUser = function (username, password) {
        var requestbody = {
            username: username,
            password: password
        };
        return this.http.post(this.globals.baseUrl + "/loginUser", requestbody, httpOptions);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/user/current-user.service.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/user/current-user.service.ts ***!
  \***************************************************/
/*! exports provided: CurrentUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserService", function() { return CurrentUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CurrentUserService = /** @class */ (function () {
    function CurrentUserService() {
    }
    CurrentUserService.prototype.setUser = function (user) {
        this.user = user;
    };
    CurrentUserService.prototype.getUser = function () {
        return this.user;
    };
    CurrentUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CurrentUserService);
    return CurrentUserService;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// To change in a file, create a function and set it to something like this:
/*
import {Globals} from '...';
constructor(private globals: Globals)
private changed() {
  this.globals.baseUrl = '';
}
*/
var Globals = /** @class */ (function () {
    function Globals() {
        this.sessionIdKey = 'behavior-enrichment-session';
        this.baseUrl = 'http://localhost:8080';
        this.userInfoKey = 'behavioral-user-info';
    }
    Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/header/about-dialog.html":
/*!******************************************!*\
  !*** ./src/app/header/about-dialog.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>About this Webpage</h1>\r\n\r\n<mat-dialog-content>\r\n  <h2>Developers</h2>\r\n  <p>This application was developed by Project Group B at the University of Nebraska at Omaha (class of 2019) as part of their Capstone course. Their names are:</p>\r\n  <ul>\r\n    <li>Donovan Troshynski</li>\r\n    <li>Zach Evans</li>\r\n    <li>Mariah Schon</li>\r\n    <li>Al Ohlinger</li>\r\n  </ul>\r\n  <h2>Acknowledgements</h2>\r\n  <p>Project Group B would like to thank the following:</p>\r\n  <ul>\r\n    <li>The <a href=\"https://angular.io/\" target=\"_blank\">Angular</a> team</li>\r\n    <li>The <a href=\"https://material.angular.io/\" target=\"_blank\">Angular Material</a> team</li>\r\n    <li>The <a href=\"https://spring.io/projects/spring-boot\" target=\"_blank\">Spring Boot</a> team</li>\r\n    <li>Our client, Taylor Daniels, for being patient and understanding as we learned how to build a webpage and work as a team.</li>\r\n    <li>Our professor, Harvey Siy, for teaching the course.</li>\r\n  </ul>\r\n  <h2>Tech Stack</h2>\r\n  <p>This project was built with:</p>\r\n  <ul>\r\n    <li>Typescript v3.4.3</li>\r\n    <li>Angular CLI v7.2.4</li>\r\n    <li>Angular v7.2.12</li>\r\n    <li>Angular Material v7.3.7</li>\r\n    <li>Node v8.11.3</li>\r\n    <li>Spring Boot v2.1.2</li>\r\n    <li>MySQL v8.0.14</li>\r\n  </ul>\r\n</mat-dialog-content>\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button color=\"primary\" mat-dialog-close>Close</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"full-header\">\r\n  <button mat-button routerLink=\"/home\" routerLinkActive=\"active\">Home</button>\r\n  <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item color=\"primary\" routerLink=\"/request-form\" routerLinkActive=\"active\">Novel Enrichment Request Form</button>\r\n    <button mat-menu-item color=\"primary\" routerLink=\"/incident-report\" routerLinkActive=\"active\">Incident Report</button>\r\n    <button mat-menu-item color=\"primary\" routerLink=\"/master-approved\" routerLinkActive=\"active\">Approved Enrichment</button>\r\n    <button mat-menu-item color=\"primary\" routerLink=\"/request-form-status\" routerLinkActive=\"active\">Request Form Status Report</button>\r\n    <button mat-menu-item color=\"primary\" routerLink=\"/incident-report-status\" routerLinkActive=\"active\">Incident Status Report</button>\r\n  </mat-menu>\r\n  <button mat-button routerLink=\"/account\" routerLinkActive=\"active\">My Account</button>\r\n  <button *ngIf=\"isAdmin\" mat-button routerLink=\"/admin\" routerLinkActive=\"active\">Admin</button>\r\n  <img class=\"left-margin-to-center\" src=\"../../assets/images/Zoo_Logo_Horizontal.jpg\" alt=\"Zoo Logo\" height=\"50\" width=\"120\">\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <button mat-button routerLink=\"/help\" routerLinkActive=\"active\">Help</button>\r\n  <button mat-button class=\"right-margin\" (click)=\"showAboutDialog()\">About</button>\r\n  <button mat-raised-button color=\"accent\" (click)=\"logout()\">Logout</button>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\n  flex: 1 1 auto; }\n\n.full-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10; }\n\n.left-margin-to-center {\n  margin-left: 25%; }\n\n.right-margin {\n  margin-right: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcWmFjaFxcRG9jdW1lbnRzXFxhU3ByaW5nMjAxOVxcQ2Fwc3RvbmVcXFBHQi1Bbmd1bGFyXFxCZWhhdmlvcmFsRW5yaWNobWVudC1Bbmd1bGFyL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVyxFQUFBOztBQUViO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4uZnVsbC1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4ubGVmdC1tYXJnaW4tdG8tY2VudGVyIHtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG59XHJcbi5yaWdodC1tYXJnaW4ge1xyXG4gIG1hcmdpbi1yaWdodDogMjVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent, AboutDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDialogComponent", function() { return AboutDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _auth_user_current_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/user/current-user.service */ "./src/app/auth/user/current-user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router, globals, currentUser, aboutDialog) {
        this.authService = authService;
        this.router = router;
        this.globals = globals;
        this.currentUser = currentUser;
        this.aboutDialog = aboutDialog;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.username = this.currentUser.getUser().username;
        this.isAdmin = this.currentUser.getUser().admin;
    };
    HeaderComponent.prototype.logout = function () {
        sessionStorage.removeItem(this.globals.sessionIdKey);
        this.authService.redirectUrl = '';
        this.router.navigate(['/login']);
    };
    HeaderComponent.prototype.showAboutDialog = function () {
        this.aboutDialog.open(AboutDialogComponent);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"],
            _auth_user_current_user_service__WEBPACK_IMPORTED_MODULE_5__["CurrentUserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], HeaderComponent);
    return HeaderComponent;
}());

var AboutDialogComponent = /** @class */ (function () {
    function AboutDialogComponent() {
    }
    AboutDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-dialog',
            template: __webpack_require__(/*! ./about-dialog.html */ "./src/app/header/about-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutDialogComponent);
    return AboutDialogComponent;
}());



/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<h1 class=\"mat-display-1 center-align\">Help & Tutorial</h1>\r\n\r\n<mat-tab-group>\r\n  <mat-tab label=\"All Users\">\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>Submitting Incident Report</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <p>To submit an incident report, follow these steps:</p>\r\n        <ol>\r\n          <li>Go to the \"Incident Report\" page.</li>\r\n          <li>Fill out each step of the form, making sure the information is correct.</li>\r\n          <li>Sign the form with your name and the date of submission.</li>\r\n          <li>Double check that everything in the form is correct to the best of your understanding.</li>\r\n          <li>If everything checks out, submit the form.</li>\r\n        </ol>\r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>Submitting Enrichment Request</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <p>To submit a request to add an enrichment item, follow these steps:</p>\r\n        <ol>\r\n          <li>Go to the \"Request Form\" page</li>\r\n          <li>Fill out each step on the page</li>\r\n          <li>If a dropdown doesn't have the value you want, contact an administrator to get it added</li>\r\n          <li>Before you submit, double check everything is correct. You will not be able to edit your request after submisssion.</li>\r\n          <li>If everything checks out, submit the request.</li>\r\n          <li>Check back on the status of your request by going to the \"Request Form Status Report\" page</li>\r\n        </ol>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </mat-tab>\r\n  <mat-tab label=\"Admins\" *ngIf=\"isAdmin\">\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>Approving Enrichment Requests</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <p>Approve an enrichment request by following these steps:</p>\r\n        <ol>\r\n          <li>Step one</li>\r\n        </ol>\r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>Adding a user</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <p>Add a new user by following these steps:</p>\r\n        <ol>\r\n          <li>Go to the \"Admin\" page using the button on the header bar.</li>\r\n          <li>Click on the \"Add User\" tab.</li>\r\n          <li>Fill out the form with the new user information.</li>\r\n          <li>The password will be set to a default value. Please encourage the user to change it as soon as possible.</li>\r\n          <li>Submit the form.</li>\r\n          <li>If successful, the user has been added.</li>\r\n          <li>If unsuccessful, the user has not been added and you may need to try again (or contact an IT professional).</li>\r\n        </ol>\r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>Edit user info</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <p>Edit a user's info by following these steps:</p>\r\n        <ol>\r\n          <li>Go to the \"Admin\" page using the button on the header bar.</li>\r\n          <li>Click on the \"User Actions\" tab.</li>\r\n          <li>Here you will see a list of every user that has access to the site.</li>\r\n          <li>Search for the user whose info you need to change.</li>\r\n          <li>The right-most column on that user's row will have a button labeled \"Edit User\". Click it.</li>\r\n          <li>A pop-up dialog will show containing a form filled out with the user's current information.</li>\r\n          <li>Change the information you need to.</li>\r\n          <li>Warning: any information you change will replace the current information. Make sure everything you entered is correct!</li>\r\n          <li>Submit the form.</li>\r\n          <li>A snackbar will show at the bottom detailing whether the request was successful or not.</li>\r\n          <li>If successful, the new information will now be shown in the table.</li>\r\n          <li>If unsuccessful, try again or contact an IT professional.</li>\r\n        </ol>\r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>Deactivate/Reactivate a User Account</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <p><strong>Warning: deactivating a user's account will prevent them from logging in.</strong></p>\r\n        <p>To deactivate or reactivate a user's account, follow these steps:</p>\r\n        <ol>\r\n          <li>Go to the \"Admin\" page using the button on the header bar.</li>\r\n          <li>Click on the \"User Actions\" tab.</li>\r\n          <li>You will see a list of all users with access to the site.\r\n            <ul>\r\n              <li>Optional: currently deactivated users are hidden by default. Check the \"Show Deactivated Users\" checkbox to show them.</li>\r\n            </ul>\r\n          </li>\r\n          <li>Search for the user(s) you wish to deactivate.</li>\r\n          <li>The left-most column of each row should be a checkbox. Check the row for each user whose account you wish to deactivate or reactivate.</li>\r\n          <li>The deactivate/reactivate button should now be clickable.</li>\r\n          <li>Make sure only those users whose accounts you wish to deactivate or reactivate are checked.</li>\r\n          <li>Click the appropriate button.</li>\r\n          <li>A snackbar will show at the bottom detailing whether the request was successful or not.</li>\r\n          <li>If successful, the user account status will be changed.</li>\r\n          <li>If unsuccessful, try again or contact an IT professional.</li>\r\n        </ol>\r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>Reset a User's Password</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <p><strong>Warning: only reset a user's password if the user has forgotten theirs.</strong></p>\r\n        <p>To reset a user's password, follow these steps:</p>\r\n        <ol>\r\n          <li>Go to the \"Admin\" page using the button on the header bar.</li>\r\n          <li>Click on the \"User Actions\" tab.</li>\r\n          <li>You will see a list of all users with access to the site.</li>\r\n          <li>Search for the user(s) you need.</li>\r\n          <li>The left-most column of each row should be a checkbox. Check the row for each user whose password you need to reset.</li>\r\n          <li>The \"Reset User Passwords\" button should now be clickable.</li>\r\n          <li>Make sure only those users whose account passwords you need to reset are checked.</li>\r\n          <li>Click the \"Reset User Passwords\" button.</li>\r\n          <li>A snackbar will show at the bottom detailing whether the request was successful or not.</li>\r\n          <li>If successful, the user's password will be changed to the default password:\r\n            <ul>\r\n              <li>Default password is the first letter of the user's firstname followed by the first 5 letters of their last name, all lower case.</li>\r\n              <li>For example, user \"John Doe\" has a default password of \"jdoe\" and user \"Ash Ketchum\" has a default password of \"aketch\".</li>\r\n            </ul>\r\n          </li>\r\n          <li>If unsuccessful, try again or contact an IT professional.</li>\r\n        </ol>\r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>Add a New Department/Species, Change Homepage Image, etc.</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <p>To add new information, follow these steps:</p>\r\n        <ol>\r\n          <li>Go to the \"Admin\" page using the button on the header bar.</li>\r\n          <li>Click on the \"Additions/Deletions\" tab.</li>\r\n          <li>You will see a variety of inputs.</li>\r\n          <li>Find the input(s) for the information you want to add.</li>\r\n          <li>Fill out the information for the addition.</li>\r\n          <li>Make sure the information is correct.</li>\r\n          <li>Click the appropriate button.</li>\r\n          <li>A snackbar will show at the bottom detailing whether the request was successful or not.</li>\r\n          <li>If successful, the information will be added.</li>\r\n          <li>If unsuccessful, try again or contact an IT professional.</li>\r\n        </ol>\r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>Delete a Department/Species, etc.</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <p>To delete some information, follow these steps:</p>\r\n        <ol>\r\n          <li>Go to the \"Admin\" page using the button on the header bar.</li>\r\n          <li>Click on the \"Additions/Deletions\" tab.</li>\r\n          <li>You will see a variety of inputs.</li>\r\n          <li>Find the input for the information you want to delete.</li>\r\n          <li>Select the information you need to delete.</li>\r\n          <li>Make sure the information you selected is correct.</li>\r\n          <li>Click the appropriate button.</li>\r\n          <li>A snackbar will show at the bottom detailing whether the request was successful or not.</li>\r\n          <li>If successful, the information will be deleted/removed.</li>\r\n          <li>If unsuccessful, try again or contact an IT professional.</li>\r\n        </ol>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/help/help.component.scss":
/*!******************************************!*\
  !*** ./src/app/help/help.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom-margin {\n  margin-bottom: 0%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9DOlxcVXNlcnNcXFphY2hcXERvY3VtZW50c1xcYVNwcmluZzIwMTlcXENhcHN0b25lXFxQR0ItQW5ndWxhclxcQmVoYXZpb3JhbEVucmljaG1lbnQtQW5ndWxhci9zcmNcXGFwcFxcaGVscFxcaGVscC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdHRvbS1tYXJnaW4ge1xyXG4gIG1hcmdpbi1ib3R0b206IDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_user_current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/user/current-user.service */ "./src/app/auth/user/current-user.service.ts");



var HelpComponent = /** @class */ (function () {
    function HelpComponent(currentUser) {
        this.currentUser = currentUser;
        this.isAdmin = false;
    }
    HelpComponent.prototype.ngOnInit = function () {
        this.isAdmin = this.currentUser.getUser().admin;
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.scss */ "./src/app/help/help.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_user_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<h1 class=\"mat-display-1 center-align\">Omaha's Henry Doorly Zoo & Aquarium Behavioral Enrichment Program</h1>\r\n<mat-grid-list cols=\"2\" rowHeight=\"550px\">\r\n  <mat-grid-tile [colspan]=\"1\">\r\n    <mat-card class=\"mat-elevation-z8\">\r\n      <mat-card-header>\r\n        <mat-card-title>Navigation</mat-card-title>\r\n        <mat-card-subtitle>Also included in the Menu Dropdown</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <button mat-raised-button class=\"button-full-width\" color=\"primary\" routerLink=\"/home\" routerLinkActive=\"active\">Home</button>\r\n        <button mat-raised-button class=\"button-full-width\" color=\"primary\" routerLink=\"/master-approved\" routerLinkActive=\"active\">Approved Enrichment</button>\r\n        <button mat-raised-button class=\"button-full-width\" color=\"primary\" routerLink=\"/request-form\" routerLinkActive=\"active\">Novel Enrichment Request Form</button>\r\n        <button mat-raised-button class=\"button-full-width\" color=\"primary\" routerLink=\"/incident-report\" routerLinkActive=\"active\">Incident Report</button>\r\n        <button mat-raised-button class=\"button-full-width\" color=\"primary\" routerLink=\"/request-form-status\" routerLinkActive=\"active\">Request Form Status Report</button>\r\n        <button mat-raised-button class=\"button-full-width\" color=\"primary\" routerLink=\"/incident-report-status\" routerLinkActive=\"active\">Incident Status Report</button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile [colspan]=\"1\">\r\n    <mat-card class=\"mat-elevation-z8 set-width\">\r\n      <mat-card-header>\r\n        <mat-card-title>Welcome {{name}} to the OHDZA Enrichment Database!</mat-card-title>\r\n        <mat-card-subtitle>To the Behavior Enrichment Logs</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <img mat-card-image [src]=\"homepageImage\" height=\"375\">\r\n      <!-- <mat-card-content>\r\n        <p>REWORD this!</p>\r\n      </mat-card-content> -->\r\n    </mat-card>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-full-width {\n  display: block;\n  width: 100%;\n  margin-bottom: 20px; }\n\n.set-width {\n  max-width: 700px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFphY2hcXERvY3VtZW50c1xcYVNwcmluZzIwMTlcXENhcHN0b25lXFxQR0ItQW5ndWxhclxcQmVoYXZpb3JhbEVucmljaG1lbnQtQW5ndWxhci9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWZ1bGwtd2lkdGgge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnNldC13aWR0aCB7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_user_current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/user/current-user.service */ "./src/app/auth/user/current-user.service.ts");
/* harmony import */ var _shared_main_enrichment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/main/enrichment.service */ "./src/app/shared/main/enrichment.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(currentUser, service, snackbar) {
        this.currentUser = currentUser;
        this.service = service;
        this.snackbar = snackbar;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.name = this.currentUser.getUser().firstName;
        this.getHomepageImage();
    };
    HomeComponent.prototype.getHomepageImage = function () {
        var _this = this;
        this.service.getHomepageImage().subscribe(function (data) {
            _this.homepageImage = "data:image/jpg;base64," + data.base64EncodedImage;
        }, function (err) {
            _this.snackbar.open('ERROR: HTTP error when getting homepage image', 'OK', {
                duration: 3000
            });
            console.error('Error getting homepage image:');
            console.error(err);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_user_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"],
            _shared_main_enrichment_service__WEBPACK_IMPORTED_MODULE_3__["EnrichmentService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/incident-report-status/incident-report-status.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/incident-report-status/incident-report-status.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<h1 class=\"mat-display-1 center-align\">Novel Life Strategy Enrichment Incidents</h1>\r\n\r\n<mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\r\n</mat-form-field>\r\n\r\n\r\n\r\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n\r\n  <ng-container matColumnDef=\"select\">\r\n    <th mat-header-cell *matHeaderCellDef>\r\n      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n                    [aria-label]=\"checkboxLabel()\">\r\n      </mat-checkbox>\r\n    </th>\r\n    <td mat-cell *matCellDef=\"let row\">\r\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                    (change)=\"$event ? selection.toggle(row) : null\"\r\n                    [checked]=\"selection.isSelected(row)\"\r\n                    [aria-label]=\"checkboxLabel(row)\">\r\n      </mat-checkbox>\r\n    </td>\r\n  </ng-container>    \r\n\r\n    \r\n  <!-- Incident ID Column -->\r\n  <ng-container matColumnDef=\"incidentID\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Incident ID </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.incidentID}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Incident Date Column -->\r\n  <ng-container matColumnDef=\"incDate\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Incident Date </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.incDate}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Enrichment Item Column -->\r\n  <ng-container matColumnDef=\"enrichItem\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Enrichment Item </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.enrichItem}} </td>\r\n  </ng-container>    \r\n\r\n  <!-- Department Column -->\r\n  <ng-container matColumnDef=\"department\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Department </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.department}} </td>\r\n  </ng-container>\r\n\r\n  <!--Future Use Column -->\r\n  <ng-container matColumnDef=\"futureUse\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Future Use Decision </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.futureUse}} </td>\r\n\r\n  </ng-container>\r\n\r\n   <!--Future Use Update Column -->\r\n  <ng-container matColumnDef=\"futureUseUpdate\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>  </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.futureUseUpdate}} </td>\r\n    \r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></tr>\r\n\r\n</table>\r\n\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n\r\n\r\n\r\n<!--div>\r\n  <label for=\"pending\">Decision on Future Use of the Enrichment Involved in the Incident (Pending Only):</label>\r\n  <br/>\r\n  <mat-radio-group class=\"radio-group left-margin\" id=\"pending\" name=\"pending\" formControlName=\"pending\" required>\r\n    <mat-radio-button class=\"radio-button\" value=\"dontUse\">The enrichment item should no longer be used</mat-radio-button>\r\n    <mat-radio-button class=\"radio-button\" value=\"certainUse\">The enrichment item should no longer be used for this particular animal</mat-radio-button>\r\n    <mat-radio-button class=\"radio-button\" value=\"modify\">The enrichment item should be modified before use again</mat-radio-button>\r\n    <mat-radio-button class=\"radio-button\" value=\"other\">Other</mat-radio-button> \r\n  </mat-radio-group>\r\n</div-->\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/incident-report-status/incident-report-status.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/incident-report-status/incident-report-status.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jaWRlbnQtcmVwb3J0LXN0YXR1cy9DOlxcVXNlcnNcXFphY2hcXERvY3VtZW50c1xcYVNwcmluZzIwMTlcXENhcHN0b25lXFxQR0ItQW5ndWxhclxcQmVoYXZpb3JhbEVucmljaG1lbnQtQW5ndWxhci9zcmNcXGFwcFxcaW5jaWRlbnQtcmVwb3J0LXN0YXR1c1xcaW5jaWRlbnQtcmVwb3J0LXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2luY2lkZW50LXJlcG9ydC1zdGF0dXMvaW5jaWRlbnQtcmVwb3J0LXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/incident-report-status/incident-report-status.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/incident-report-status/incident-report-status.component.ts ***!
  \****************************************************************************/
/*! exports provided: IncidentReportStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentReportStatusComponent", function() { return IncidentReportStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



// Stand in sampling data until database ready
var INCIDENTS = [
    { incidentID: 1, incDate: '12 Apr 19', enrichItem: 'Feather', department: 'Birds', futureUse: "Do not use", futureUseUpdate: "update" },
    { incidentID: 2, incDate: '13 Apr 19', enrichItem: 'Log', department: 'Lizards', futureUse: "Do not use", futureUseUpdate: "update" },
    { incidentID: 3, incDate: '13 Feb 19', enrichItem: 'Ball', department: 'Monkeys', futureUse: "Pending", futureUseUpdate: "update" },
];
var IncidentReportStatusComponent = /** @class */ (function () {
    function IncidentReportStatusComponent() {
        this.displayedColumns = ['incidentID', 'incDate', 'enrichItem', 'department', 'futureUse', 'futureUseUpdate'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](INCIDENTS);
    }
    IncidentReportStatusComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    IncidentReportStatusComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], IncidentReportStatusComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], IncidentReportStatusComponent.prototype, "sort", void 0);
    IncidentReportStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incident-report-status',
            template: __webpack_require__(/*! ./incident-report-status.component.html */ "./src/app/incident-report-status/incident-report-status.component.html"),
            styles: [__webpack_require__(/*! ./incident-report-status.component.scss */ "./src/app/incident-report-status/incident-report-status.component.scss")]
        })
    ], IncidentReportStatusComponent);
    return IncidentReportStatusComponent;
}());



/***/ }),

/***/ "./src/app/incident-report/incident-report.component.html":
/*!****************************************************************!*\
  !*** ./src/app/incident-report/incident-report.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<h1 class=\"mat-display-1 center-align\">Novel Life Strategy Enrichment Incident Report</h1>\r\n\r\n<form [formGroup]=\"incidentReportFormGroup\">\r\n  <mat-horizontal-stepper [linear]=\"false\" #stepper formArrayName=\"incidentReport\">\r\n    <mat-step formGroupName=\"0\" [stepControl]=\"incidentReport?.get([0])\" label=\"General Information\">\r\n\r\n      \r\n      <div>\r\n        <!-- <label for=\"dept\">Department: </label> -->\r\n        <mat-form-field id=\"incDepartment\" name=\"incDepartment\">\r\n          <input matInput placeholder=\"Department\" formControlName=\"incDepartment\" required>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div>\r\n        <!-- <label for=\"date\">Date of Incident: </label> -->\r\n        <label for=\"date\">Date of incident: </label>\r\n        <mat-form-field id=\"dateOfIncident\" name=\"dateOfIncident\">\r\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" formControlName=\"dateOfIncident\" required>\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div>\r\n        <!-- <label for=\"location\">Location: </label> -->\r\n        <mat-form-field id=\"locationOfIncident\" name=\"locationOfIncident\">\r\n          <input matInput placeholder=\"Location of Incident:\" formControlName=\"locationOfIncident\" required>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div>\r\n        <!-- <label for=\"location\">Location: </label> -->\r\n        <mat-form-field id=\"animalsIncident\" name=\"animalsIncident\">\r\n          <input matInput placeholder=\"Animal(s) Involved:\" formControlName=\"animalsIncident\" required>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"button-row\">\r\n          <button mat-raised-button matStepperPrevious type=\"button\">Back</button>\r\n          <button mat-raised-button matStepperNext type=\"button\">Next</button>\r\n        </div>\r\n    </mat-step>\r\n\r\n    <mat-step formGroupName=\"1\" [stepControl]=\"incidentReport?.get([1])\" label=\"Enrichment Data\">\r\n      <div>\r\n        <label for=\"enrichmentInvolved\">Enrichment(s) Involved in the Incident:</label>\r\n        <br/>\r\n        <mat-radio-group class=\"radio-group left-margin\" id=\"enrichmentInvolved\" name=\"enrichmentInvolved\" formControlName=\"enrichmentInvolved\" required>\r\n          <mat-radio-button class=\"radio-button\" value=\"novel\">Novel enrichment</mat-radio-button>\r\n          <mat-radio-button class=\"radio-button\" value=\"previous\">Previously introduced enrichment</mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <div *ngIf=\"incidentReport?.get([1]).value.enrichmentInvolved === 'novel'\" class=\"left-margin\">\r\n        <mat-form-field id=\"novelYN\" name=\"novelYN\">\r\n          <label for=\"novelYN\">Was an enrichment request form filled out and approved? </label>\r\n          <mat-select placeholder=\"\" formControlName=\"novelYN\" required>\r\n            <mat-option [value]=\"true\">Yes</mat-option>\r\n            <mat-option [value]=\"false\">No</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <label for=\"enrichDescription\">Describe the Enrichment Involved in the Incident:</label>\r\n        <br/>\r\n        <mat-form-field class=\"increased-width\" id=\"enrichDescription\" name=\"enrichDescription\">\r\n          <textarea matInput placeholder=\"Details, articles, any data if possible\" formControlName=\"enrichDescription\" required></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"button-row\">\r\n          <button mat-raised-button matStepperPrevious type=\"button\">Back</button>\r\n          <button mat-raised-button matStepperNext type=\"button\">Next</button>\r\n        </div>\r\n\r\n    </mat-step>\r\n\r\n    <mat-step formGroupName=\"2\" [stepControl]=\"incidentReport?.get([2])\" label=\"Incident Data\">\r\n      <div>\r\n        <label for=\"bestDescribes\">Please choose which one best describes the incident: </label>\r\n        <br/>\r\n        <mat-radio-group class=\"radio-group left-margin\" id=\"bestDescribes\" name=\"bestDescribes\" formControlName=\"bestDescribes\" required>\r\n          <mat-radio-button class=\"radio-button\" value=\"death\">An animal is deceased as a result of the incident</mat-radio-button>\r\n          <mat-radio-button class=\"radio-button\" value=\"danger\">An animal’s life was in immediate danger</mat-radio-button>\r\n          <mat-radio-button class=\"radio-button\" value=\"injured\">An animal or another in area was injured by the enrichment item</mat-radio-button>\r\n          <mat-radio-button class=\"radio-button\" value=\"caught\">An animal was caught in/on the enrichment item</mat-radio-button>\r\n          <mat-radio-button class=\"radio-button\" value=\"injested\">An animal ingested part of the enrichment item</mat-radio-button>\r\n          <mat-radio-button class=\"radio-button\" value=\"distress\">Enrichment caused distress or social disruption</mat-radio-button>\r\n          <mat-radio-button class=\"radio-button\" value=\"other\">Other. Detail in text box below.</mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n\r\n      <div>\r\n        <label for=\"incDescription\">Describe the incident: </label>\r\n        <br/>\r\n        <mat-form-field class=\"increased-width\" id=\"incDescription\" name=\"incDescription\">\r\n          <textarea matInput placeholder=\"Details, articles, any data if possible\" formControlName=\"incDescription\" required></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div>\r\n        <label for=\"actionsTaken\">Describe actions taken: </label>\r\n        <br/>\r\n        <mat-form-field class=\"increased-width\" id=\"actionsTaken\" name=\"actionsTaken\">\r\n          <textarea matInput placeholder=\"Details, articles, any data if possible\" formControlName=\"actionsTaken\" required></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div>\r\n        <!-- <label for=\"name\">Name: </label> -->\r\n        <label for=\"name\">Your name: </label>\r\n        <mat-form-field id=\"incName\" name=\"incName\">\r\n          <input matInput placeholder=\"John Smith\" formControlName=\"incName\" required>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div>\r\n        <!-- <label for=\"date\">Date of Incident: </label> -->\r\n        <label for=\"dateOfSubmission\">Date of submission: </label>\r\n        <mat-form-field id=\"dateOfSubmission\" name=\"dateOfSubmission\">\r\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Date\" formControlName=\"dateOfSubmission\" required>\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker2></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"button-row\">\r\n        <button mat-raised-button matStepperPrevious type=\"button\">Back</button>\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"!incidentReportFormGroup.valid\" (click)=\"submitForm(stepper)\">Submit</button>\r\n      </div>\r\n\r\n    </mat-step>\r\n\r\n\r\n  </mat-horizontal-stepper>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/incident-report/incident-report.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/incident-report/incident-report.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".increased-width {\n  width: 500px; }\n\n.full-width {\n  width: 100%; }\n\n.radio-group {\n  display: inline-flex;\n  flex-direction: column; }\n\n.radio-button {\n  margin: 5px; }\n\n.button-row button {\n  margin-right: 8px; }\n\n.left-margin {\n  margin-left: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jaWRlbnQtcmVwb3J0L0M6XFxVc2Vyc1xcWmFjaFxcRG9jdW1lbnRzXFxhU3ByaW5nMjAxOVxcQ2Fwc3RvbmVcXFBHQi1Bbmd1bGFyXFxCZWhhdmlvcmFsRW5yaWNobWVudC1Bbmd1bGFyL3NyY1xcYXBwXFxpbmNpZGVudC1yZXBvcnRcXGluY2lkZW50LXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2luY2lkZW50LXJlcG9ydC9pbmNpZGVudC1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5jcmVhc2VkLXdpZHRoIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICB9XHJcbiAgLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5yYWRpby1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5yYWRpby1idXR0b24ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG4gIC5idXR0b24tcm93IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcbiAgLmxlZnQtbWFyZ2luIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/incident-report/incident-report.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/incident-report/incident-report.component.ts ***!
  \**************************************************************/
/*! exports provided: IncidentReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentReportComponent", function() { return IncidentReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_main_incident_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/main/incident.service */ "./src/app/shared/main/incident.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");






var IncidentReportComponent = /** @class */ (function () {
    function IncidentReportComponent(formBuilder, service, snackbar) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.snackbar = snackbar;
        // Category chips variables
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        this.categories = [];
        this.allCategories = ['Sensory', 'Feeding', 'Habitation', 'Social', 'Learning'];
    }
    Object.defineProperty(IncidentReportComponent.prototype, "incidentReport", {
        get: function () { return this.incidentReportFormGroup.get('incidentReport'); },
        enumerable: true,
        configurable: true
    });
    IncidentReportComponent.prototype.ngOnInit = function () {
        this.initFormGroup();
        this.incidentFormControl = this.incidentReportFormGroup.controls['incidentReport'];
    };
    IncidentReportComponent.prototype.initFormGroup = function () {
        this.incidentReportFormGroup = this.formBuilder.group({
            incidentReport: this.formBuilder.array([
                this.formBuilder.group({
                    incDepartment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    dateOfIncident: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    locationOfIncident: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    animalsIncident: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                }),
                this.formBuilder.group({
                    enrichmentInvolved: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    novelYN: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    enrichDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                }),
                this.formBuilder.group({
                    bestDescribes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    incDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    actionsTaken: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    incName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    dateOfSubmission: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                })
            ])
        });
    };
    IncidentReportComponent.prototype.submitForm = function (stepper) {
        var _this = this;
        // TODO: submit image options:
        // https://stackoverflow.com/questions/1665730/images-in-mysql
        // https://stackoverflow.com/questions/3014578/storing-images-in-mysql
        // https://stackoverflow.com/questions/6472233/can-i-store-images-in-mysql
        // https://www.quora.com/What-is-the-best-way-to-store-100-images-in-a-MySQL-database-in-this-case
        console.log('incident form submitted:');
        console.log(this.toSingleObject(this.incidentReportFormGroup.value));
        this.service.submitIncidentReportForm(this.toSingleObject(this.incidentReportFormGroup.value)).subscribe(function (data) {
            if (!data.error) {
                _this.snackbar.open(data.message, 'OK', {
                    duration: 5000
                });
                stepper.reset();
            }
            else {
                // do NOT reset form
                _this.snackbar.open("ERROR: " + data.errorMsg, 'OK', {
                    duration: 5000
                });
            }
        });
    };
    IncidentReportComponent.prototype.toSingleObject = function (groupValue) {
        var requestArray = groupValue.incidentReport;
        var completeForm = {
            department: requestArray[0].department,
            dateOfIncident: requestArray[0].dateOfIncident,
            locationOfIncident: requestArray[0].locationOfIncident,
            animalsIncident: requestArray[0].locationOfIncident,
            enrichmentInvolved: requestArray[1].enrichmentInvolved,
            novelYN: requestArray[1].novelYN,
            enrichDescription: requestArray[1].enrichDescription,
            bestDescribes: requestArray[2].bestDescribes,
            incDescription: requestArray[2].incDescription,
            actionsTaken: requestArray[2].actionsTaken,
            incName: requestArray[2].incName,
            dateOfSubmission: requestArray[2].dateOfSubmission,
        };
        return completeForm;
    };
    IncidentReportComponent.prototype.add = function (event) {
        // Add category only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            // Add our category
            if ((value || '').trim()) {
                this.categories.push(value.trim());
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.incidentFormControl.at(4).get('enrichmentCategory').setValue(null);
        }
    };
    IncidentReportComponent.prototype.remove = function (category) {
        var index = this.categories.indexOf(category);
        if (index >= 0) {
            this.categories.splice(index, 1);
        }
    };
    IncidentReportComponent.prototype.selected = function (event) {
        this.categories.push(event.option.viewValue);
        this.categoryInput.nativeElement.value = '';
        this.incidentFormControl.at(4).get('enrichmentCategory').setValue(null);
    };
    IncidentReportComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.allCategories.filter(function (category) { return category.toLowerCase().indexOf(filterValue) === 0; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('categoryInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], IncidentReportComponent.prototype, "categoryInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"])
    ], IncidentReportComponent.prototype, "matAutocomplete", void 0);
    IncidentReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incident-report',
            template: __webpack_require__(/*! ./incident-report.component.html */ "./src/app/incident-report/incident-report.component.html"),
            styles: [__webpack_require__(/*! ./incident-report.component.scss */ "./src/app/incident-report/incident-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_main_incident_service__WEBPACK_IMPORTED_MODULE_3__["IncidentService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], IncidentReportComponent);
    return IncidentReportComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mat-display-1 center-align\">Omaha's Henry Doorly Zoo & Aquarium Behavioral Enrichment Program</h1>\r\n<mat-grid-list cols=\"1\" rowHeight=\"550px\">\r\n  <mat-grid-tile>\r\n    <mat-card class=\"max-width mat-elevation-z8\">\r\n      <mat-card-header>\r\n        <mat-card-title>Login</mat-card-title>\r\n        <mat-card-subtitle>Username & Password</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <img mat-card-image src=\"../../assets/images/Zoo_Logo_Horizontal.jpg\" alt=\"Zoo Logo\">\r\n      <mat-card-content>\r\n        <form class=\"form-css\" [formGroup]=\"loginForm\" (ngSubmit)=\"logIn()\">\r\n          <mat-form-field appearance=\"outline\" hintLabel=\"Max 15 characters\" class=\"full-width\">\r\n            <mat-label>Username</mat-label>\r\n            <input matInput formControlName=\"username\" type=\"text\" placeholder=\"panther\" autofocus required/>\r\n            <mat-hint align=\"end\">{{loginForm.get('username').value?.length || 0}}/15</mat-hint>\r\n            <mat-error *ngIf=\"loginForm.get('username').invalid\">{{getUsernameErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n            <mat-label>Password</mat-label>\r\n            <input matInput formControlName=\"password\" type=\"password\" placeholder=\"pleasedonteatme\" required/>\r\n            <mat-error *ngIf=\"loginForm.get('password').invalid\">Password is required</mat-error>\r\n          </mat-form-field>\r\n          <button type=\"submit\" style=\"display:none\" [disabled]=\"!loginForm.valid\"></button>\r\n        </form>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-raised-button (click)=\"logIn()\" color=\"primary\" [disabled]=\"!loginForm.valid\">Log In</button>\r\n        <!-- TODO: add loading/progress spinner when logging in (errors take longer, lets user know it's working) -->\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _auth_user_current_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/user/current-user.service */ "./src/app/auth/user/current-user.service.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service, snackbar, formBuilder, globals, currentUser) {
        this.router = router;
        this.service = service;
        this.snackbar = snackbar;
        this.formBuilder = formBuilder;
        this.globals = globals;
        this.currentUser = currentUser;
    }
    // https://angular.io/guide/reactive-forms
    LoginComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem(this.globals.sessionIdKey)) {
            this.router.navigate(['/home']);
        }
        this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        this.service.loginUser(this.loginForm.value.username, this.loginForm.value.password).subscribe(function (data) {
            if (data.loggedIn) {
                // set current user info
                _this.currentUser.setUser(data);
                console.log(data);
                // put user info as stringified JSON in session storage
                sessionStorage.setItem(_this.globals.userInfoKey, JSON.stringify(data));
                // put session id in session storage to track user
                sessionStorage.setItem(_this.globals.sessionIdKey, data.sessionId);
                var redirect = _this.service.redirectUrl ? _this.service.redirectUrl : '/home';
                _this.router.navigate([redirect]);
            }
            else {
                _this.snackbar.open(data.errorMsg, 'OK', {
                    duration: 3000
                });
            }
        }, function (error) {
            _this.snackbar.open('Error logging in', 'OK', {
                duration: 3000
            });
            console.error('Error logging in: ', error);
        });
    };
    LoginComponent.prototype.getUsernameErrorMessage = function () {
        if (this.loginForm.get('username').hasError('required')) {
            return 'Username is required';
        }
        else if (this.loginForm.get('username').hasError('maxlength')) {
            return 'Must be between 1 and 15 characters';
        }
        else {
            return 'Invalid username';
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _globals__WEBPACK_IMPORTED_MODULE_6__["Globals"],
            _auth_user_current_user_service__WEBPACK_IMPORTED_MODULE_7__["CurrentUserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/master-approved/master-approved.component.html":
/*!****************************************************************!*\
  !*** ./src/app/master-approved/master-approved.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<h1 class=\"mat-display-1 center-align\">All Approved Items</h1>\r\n\r\n<mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\r\n</mat-form-field>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\" matSort>\r\n    \r\n    <!-- Enrichment Item Column -->\r\n    <ng-container matColumnDef=\"enrichmentItem\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Enrichment Item </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.enrichmentItem}} </td>\r\n    </ng-container>\r\n\r\n    <!-- behaviorsEncouraged Column -->\r\n    <ng-container matColumnDef=\"behaviorsEncouraged\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Behaviors Encouraged </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.behaviorsEncouraged}} </td>\r\n    </ng-container>\r\n\r\n    <!-- dateApproved Column -->\r\n    <ng-container matColumnDef=\"dateApproved\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date Approved </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.dateApproved}} </td>\r\n    </ng-container>\r\n\r\n    <!-- safetyConcerns Column -->\r\n    <ng-container matColumnDef=\"safetyConcerns\" >\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Safety Concerns </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.safetyConcerns}} </td>\r\n    </ng-container>\r\n\r\n    <!-- exceptions Column -->\r\n    <ng-container matColumnDef=\"exceptions\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Exceptions </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.exceptions}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Comments Column -->\r\n    <ng-container matColumnDef=\"comments\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Comments </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.comments}} </td>\r\n    </ng-container>\r\n\r\n    <!-- species Column -->\r\n    <ng-container matColumnDef=\"species\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Species </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.species}} </td>\r\n    </ng-container>\r\n\r\n    <!-- category Column -->\r\n    <ng-container matColumnDef=\"category\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Life Strategy Category(s) </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.category}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/master-approved/master-approved.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/master-approved/master-approved.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td, th {\n  width: 14%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyLWFwcHJvdmVkL0M6XFxVc2Vyc1xcWmFjaFxcRG9jdW1lbnRzXFxhU3ByaW5nMjAxOVxcQ2Fwc3RvbmVcXFBHQi1Bbmd1bGFyXFxCZWhhdmlvcmFsRW5yaWNobWVudC1Bbmd1bGFyL3NyY1xcYXBwXFxtYXN0ZXItYXBwcm92ZWRcXG1hc3Rlci1hcHByb3ZlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci1hcHByb3ZlZC9tYXN0ZXItYXBwcm92ZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZCwgdGgge1xyXG4gICAgd2lkdGg6IDE0JTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/master-approved/master-approved.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/master-approved/master-approved.component.ts ***!
  \**************************************************************/
/*! exports provided: MasterApprovedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterApprovedComponent", function() { return MasterApprovedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_main_enrichment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/main/enrichment.service */ "./src/app/shared/main/enrichment.service.ts");




var MasterApprovedComponent = /** @class */ (function () {
    function MasterApprovedComponent(service) {
        this.service = service;
        this.displayedColumns = ['enrichmentItem', 'behaviorsEncouraged',
            'dateApproved', 'safetyConcerns', 'exceptions', 'comments', 'species', 'category'];
    }
    MasterApprovedComponent.prototype.ngOnInit = function () {
        this.getApprovedEntryFromDB();
    };
    MasterApprovedComponent.prototype.getApprovedEntryFromDB = function () {
        var _this = this;
        this.service.getApprovedEntry().subscribe(function (data) {
            _this.approvedEntries = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            console.log(data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            console.error('Error getting Approved Entries:', err);
        });
    };
    MasterApprovedComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], MasterApprovedComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], MasterApprovedComponent.prototype, "sort", void 0);
    MasterApprovedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-master-approved',
            template: __webpack_require__(/*! ./master-approved.component.html */ "./src/app/master-approved/master-approved.component.html"),
            styles: [__webpack_require__(/*! ./master-approved.component.scss */ "./src/app/master-approved/master-approved.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_main_enrichment_service__WEBPACK_IMPORTED_MODULE_3__["EnrichmentService"]])
    ], MasterApprovedComponent);
    return MasterApprovedComponent;
}());

// Stand-in until can pull from database on back end
/*const ELEMENT_DATA: ApprovedEntry[] = [
  {enrichmentItem: 'Duck Decoy', category: 'Social', species: 'Wading birds, flamingoes',
  behaviorsEncouraged: 'Vocalizing', dateApproved: '11-Dec-18',
  comments: 'none', safetyConcerns: 'none', reports: 'none'},
  {enrichmentItem: 'Snow', category: 'Environment', species: 'Penguins',
  behaviorsEncouraged: 'Toboganing', dateApproved: '23-Jan-19',
  comments: 'none', safetyConcerns: 'none', reports: 'none'},
  {enrichmentItem: 'Beef Bone', category: 'Chow', species: 'Lions',
  behaviorsEncouraged: 'Chomping', dateApproved: '2-27-19',
  comments: 'none', safetyConcerns: 'none', reports: 'none'},
  {enrichmentItem: 'Duck Decoy', category: 'Social', species: 'Wading birds, flamingoes',
  behaviorsEncouraged: 'Vocalizing', dateApproved: '11-Dec-18',
  comments: 'none', safetyConcerns: 'none', reports: 'none'},
  {enrichmentItem: 'Duck Decoy', category: 'Social', species: 'Wading birds, flamingoes',
  behaviorsEncouraged: 'Vocalizing', dateApproved: '11-Dec-18',
  comments: 'none', safetyConcerns: 'none', reports: 'none'},
  {enrichmentItem: 'Duck Decoy', category: 'Social', species: 'Wading birds, flamingoes',
  behaviorsEncouraged: 'Vocalizing', dateApproved: '11-Dec-18',
  comments: 'none', safetyConcerns: 'none', reports: 'none'},
];*/


/***/ }),

/***/ "./src/app/request-form-status/request-form-status.component.html":
/*!************************************************************************!*\
  !*** ./src/app/request-form-status/request-form-status.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<h1 class=\"mat-display-1 center-align\">All Submitted Forms</h1>\r\n\r\n<mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\r\n</mat-form-field>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <!-- EnrichmentIsApproved Column -->\r\n    <!-- <ng-container matColumnDef=\"EnrichmentIsApproved\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Approved? </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.EnrichmentIsApproved}} </td>\r\n    </ng-container> -->\r\n    <ng-container matColumnDef=\"EnrichmentIsApproved\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Approved?</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.enrichmentIsApproved}}</td>\r\n    </ng-container>\r\n\r\n    <!-- EnrichmentDateSubmitted Column -->\r\n    <ng-container matColumnDef=\"EnrichmentDateSubmitted\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Date Submitted </th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.enrichmentDateSubmitted}}</td>\r\n    </ng-container>\r\n\r\n    <!-- EnrichmentName Column -->\r\n    <ng-container matColumnDef=\"EnrichmentName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Form Title </th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.enrichmentName}}</td>\r\n    </ng-container>\r\n    \r\n    <!-- SubmittorUserName Column -->\r\n    <ng-container matColumnDef=\"SubmittorUserName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Submitted By </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.submittorUserName}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- DepartmentName Column -->\r\n    <ng-container matColumnDef=\"DepartmentName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Department </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.departmentName}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- ItemName Column -->\r\n    <ng-container matColumnDef=\"ItemName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Item </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.itemName}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- SpeciesName Column -->\r\n    <ng-container matColumnDef=\"SpeciesName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Species </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.speciesName}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- AnimalIsisNumber Column -->\r\n    <ng-container matColumnDef=\"AnimalIsisNumber\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Isis # </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.animalIsisNumber}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- EnrichmentDescription -->\r\n    <ng-container matColumnDef=\"EnrichmentDescription\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.enrichmentDescription}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- LocationName Column -->\r\n    <ng-container matColumnDef=\"LocationName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Location </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.locationName}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- EnrichmentPresentationMethod Column -->\r\n    <ng-container matColumnDef=\"EnrichmentPresentationMethod\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Presentation Method </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.enrichmentPresentationMethod}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- EnrichmentTimeStart Column -->\r\n    <ng-container matColumnDef=\"EnrichmentTimeStart\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Start </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.enrichmentTimeStart}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- EnrichmentTimeEnd Column -->\r\n    <ng-container matColumnDef=\"EnrichmentTimeEnd\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> End </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.enrichmentTimeEnd}} </td>\r\n    </ng-container>\r\n\r\n\r\n\r\n    \r\n    <!-- EnrichmentFrequency Column -->\r\n    <ng-container matColumnDef=\"EnrichmentFrequency\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Frequency </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.enrichmentFrequency}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- EnrichmentLifeStrategies Column -->\r\n    <ng-container matColumnDef=\"EnrichmentLifeStrategies\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Life Strategies? </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.enrichmentLifeStrategies}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- EnrichmentPreviousUse Column -->\r\n    <ng-container matColumnDef=\"EnrichmentPreviousUse\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Previous Use </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.enrichmentPreviousUse}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- EnrichmentContact Column -->\r\n    <ng-container matColumnDef=\"EnrichmentContact\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Contact </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.enrichmentContact}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- EnrichmentSafetyQuestions Column -->\r\n    <ng-container matColumnDef=\"EnrichmentSafetyQuestions\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Safety Questions </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.enrichmentSafetyQuestions}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- EnrichmentRisksHazards Column -->\r\n    <ng-container matColumnDef=\"EnrichmentRisksHazards\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Risks/Hazards </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.enrichmentRisksHazards}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- EnrichmentGoal Column -->\r\n    <ng-container matColumnDef=\"EnrichmentGoal\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Goal </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.enrichmentGoal}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- EnrichmentSource Column -->\r\n    <ng-container matColumnDef=\"EnrichmentSource\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Source </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.enrichmentSource}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- EnrichmentTimeRequired Column -->\r\n    <ng-container matColumnDef=\"EnrichmentTimeRequired\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Time Required </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.enrichmentTimeRequired}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- EnrichmentConstruction Column -->\r\n    <ng-container matColumnDef=\"EnrichmentConstruction\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Construction </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.enrichmentConstruction}} </td>\r\n    </ng-container>\r\n\r\n\r\n    \r\n    <!-- EnrichmentVolunteers Column -->\r\n    <ng-container matColumnDef=\"EnrichmentVolunteers\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Volunteers? </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.enrichmentVolunteers}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- EnrichmentInventory Column -->\r\n    <ng-container matColumnDef=\"EnrichmentInventory\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Inventory </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.enrichmentInventory}} </td>\r\n    </ng-container>\r\n    \r\n    <!-- EnrichmentConcerns Column -->\r\n    <ng-container matColumnDef=\"EnrichmentConcerns\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Concerns </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.enrichmentConcerns}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/request-form-status/request-form-status.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/request-form-status/request-form-status.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3QtZm9ybS1zdGF0dXMvcmVxdWVzdC1mb3JtLXN0YXR1cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/request-form-status/request-form-status.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/request-form-status/request-form-status.component.ts ***!
  \**********************************************************************/
/*! exports provided: RequestFormStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestFormStatusComponent", function() { return RequestFormStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_main_enrichment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/main/enrichment.service */ "./src/app/shared/main/enrichment.service.ts");




var RequestFormStatusComponent = /** @class */ (function () {
    function RequestFormStatusComponent(service) {
        this.service = service;
        this.displayedColumns = ['EnrichmentIsApproved',
            'EnrichmentDateSubmitted',
            'EnrichmentName',
            'SubmittorUserName',
            'DepartmentName',
            'ItemName',
            'SpeciesName',
            'AnimalIsisNumber',
            'EnrichmentDescription',
            'LocationName',
            'EnrichmentPresentationMethod',
            'EnrichmentTimeStart',
            'EnrichmentTimeEnd',
            'EnrichmentFrequency',
            'EnrichmentLifeStrategies',
            'EnrichmentPreviousUse',
            'EnrichmentContact',
            'EnrichmentSafetyQuestions',
            'EnrichmentRisksHazards',
            'EnrichmentGoal',
            'EnrichmentSource',
            'EnrichmentTimeRequired',
            'EnrichmentConstruction',
            'EnrichmentVolunteers',
            'EnrichmentInventory',
            'EnrichmentConcerns'];
    }
    RequestFormStatusComponent.prototype.ngOnInit = function () {
        this.getEnrichmentFormFromDB();
        // this.dataSource = new MatTableDataSource<EnrichmentForm>(this.enrichmentForms);
    };
    RequestFormStatusComponent.prototype.getEnrichmentFormFromDB = function () {
        var _this = this;
        this.service.getEnrichmentForm().subscribe(function (data) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            console.log('enrichment form approved items:');
            console.log(data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            console.error('Error getting Enrichment Forms:', err);
        });
    };
    RequestFormStatusComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], RequestFormStatusComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], RequestFormStatusComponent.prototype, "sort", void 0);
    RequestFormStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-form-status',
            template: __webpack_require__(/*! ./request-form-status.component.html */ "./src/app/request-form-status/request-form-status.component.html"),
            styles: [__webpack_require__(/*! ./request-form-status.component.scss */ "./src/app/request-form-status/request-form-status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_main_enrichment_service__WEBPACK_IMPORTED_MODULE_3__["EnrichmentService"]])
    ], RequestFormStatusComponent);
    return RequestFormStatusComponent;
}());

// Stand in sampling data until database ready
/*const REQUESTS: RequestInstance[] = [
  {requestID: 1, requestItem: 'Hydrogen', approved: true},
  {requestID: 2, requestItem: 'Helium',  approved: false},
  {requestID: 3, requestItem: 'Lithium', approved: true},
  {requestID: 4, requestItem: 'Beryllium', approved: false},
  {requestID: 5, requestItem: 'Boron',  approved: true},
  {requestID: 6, requestItem: 'Carbon', approved: true},
  {requestID: 7, requestItem: 'Nitrogen', approved: true},
  {requestID: 8, requestItem: 'Oxygen', approved: false},
  {requestID: 9, requestItem: 'Fluorine', approved: true},
  {requestID: 10, requestItem: 'Neon', approved: true},
  {requestID: 11, requestItem: 'Sodium',  approved: true},
  {requestID: 12, requestItem: 'Magnesium', approved: false},
  {requestID: 13, requestItem: 'Aluminum', approved: false},
  {requestID: 14, requestItem: 'Silicon', approved: false},
  {requestID: 15, requestItem: 'Phosphorus', approved: false},
  {requestID: 16, requestItem: 'Sulfur', approved: false},
  {requestID: 17, requestItem: 'Chlorine', approved: false},
  {requestID: 18, requestItem: 'Argon',  approved: true},
  {requestID: 19, requestItem: 'Potassium', approved: false},
  {requestID: 20, requestItem: 'Calcium',  approved: true},
];*/


/***/ }),

/***/ "./src/app/request-form/insert-new-animal-dialog.html":
/*!************************************************************!*\
  !*** ./src/app/request-form/insert-new-animal-dialog.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add New Animal</h1>\r\n\r\n<mat-dialog-content>\r\n  <form [formGroup]=\"newAnimalForm\">\r\n    <div>\r\n      <!-- Normal Key: Animal_IsisNumber -->\r\n      <mat-form-field id=\"isis\" name=\"isis\">\r\n        <input matInput placeholder=\"ISIS Number\" formControlName=\"isisNumber\" required>\r\n        <mat-error *ngIf=\"newAnimalForm.get('isisNumber')\">{{getErrorMsg('isisNumber')}}</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <!-- Foreign Key: 'species' table -->\r\n      <mat-form-field id=\"species\" name=\"species\">\r\n        <mat-select placeholder=\"Species Name\" formControlName=\"species\" required>\r\n          <mat-option *ngFor=\"let spec of data.species\" [value]=\"spec.speciesId\">\r\n            {{spec.speciesName}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <!-- Foreign Key: 'location' table -->\r\n      <mat-form-field id=\"location\" name=\"location\">\r\n        <mat-select placeholder=\"Location Name\" formControlName=\"location\" required>\r\n          <mat-option *ngFor=\"let loc of data.locations\" [value]=\"loc.id\">\r\n            {{loc.name}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-card class=\"mat-elevation-z8\">\r\n        <mat-card-header>\r\n          <mat-card-title>Housed</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <mat-radio-group class=\"radio-group\" formControlName=\"housed\" required>\r\n            <mat-radio-button class=\"radio-button\" value=\"individual\">Individual</mat-radio-button><br/>\r\n            <mat-radio-button class=\"radio-button\" value=\"conspecific\">Group/Conspecific</mat-radio-button><br/>\r\n            <mat-radio-button class=\"radio-button\" value=\"mixedSpecies\">Group/Mixed Species</mat-radio-button><br/>\r\n            <mat-radio-button class=\"radio-button\" value=\"onExhibit\">On Exhibit</mat-radio-button><br/>\r\n            <mat-radio-button class=\"radio-button\" value=\"offExhibit\">Off Exhibit</mat-radio-button>\r\n          </mat-radio-group>\r\n          <mat-error *ngIf=\"newAnimalForm.get('housed').hasError('required')\">'Housed' is required</mat-error>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <br/>\r\n      <mat-card class=\"mat-elevation-z8\">\r\n        <mat-card-header>\r\n          <mat-card-title>Activity Cycle</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <mat-radio-group class=\"radio-group\" formControlName=\"activityCycle\" required>\r\n            <mat-radio-button class=\"radio-button\" value=\"nocturnal\">Nocturnal</mat-radio-button><br/>\r\n            <mat-radio-button class=\"radio-button\" value=\"diurnal\">Diurnal</mat-radio-button><br/>\r\n            <mat-radio-button class=\"radio-button\" value=\"crepuscular\">Crepuscular</mat-radio-button><br/>\r\n            <mat-radio-button class=\"radio-button\" value=\"variable\">Variable</mat-radio-button>\r\n          </mat-radio-group>\r\n          <mat-error *ngIf=\"newAnimalForm.get('activityCycle').hasError('required')\">'Activity Cycle' is required</mat-error>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <br/>\r\n      <mat-card class=\"mat-elevation-z8\">\r\n        <mat-card-header>\r\n          <mat-card-title>Age</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <mat-radio-group class=\"radio-group\" formControlName=\"age\" required>\r\n            <mat-radio-button class=\"radio-button\" value=\"infant\">Infant</mat-radio-button><br/>\r\n            <mat-radio-button class=\"radio-button\" value=\"juvenile\">Juvenile</mat-radio-button><br/>\r\n            <mat-radio-button class=\"radio-button\" value=\"subadult\">Subadult</mat-radio-button><br/>\r\n            <mat-radio-button class=\"radio-button\" value=\"adult\">Adult</mat-radio-button><br/>\r\n            <mat-radio-button class=\"radio-button\" value=\"geriatric\">Geriatric</mat-radio-button>\r\n          </mat-radio-group>\r\n          <mat-error *ngIf=\"newAnimalForm.get('age').hasError('required')\">'Age(s)' is required</mat-error>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </form>\r\n</mat-dialog-content>\r\n\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"cancel()\">Cancel</button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"submitNewAnimalForm()\" [disabled]=\"!newAnimalForm.valid\">Submit</button>\r\n  </div>"

/***/ }),

/***/ "./src/app/request-form/insert-new-item-dialog.html":
/*!**********************************************************!*\
  !*** ./src/app/request-form/insert-new-item-dialog.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add New Item</h1>\r\n\r\n<mat-dialog-content>\r\n  <form [formGroup]=\"newItemForm\">\r\n    <label>\r\n      Upload photo:\r\n      <input type=\"file\" (change)=\"onFileChange($event)\" accept=\"{.png,.jpg,.jpeg}\"/>\r\n    </label>\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Item Name\" formControlName=\"name\" required>\r\n      <mat-hint align=\"end\">{{newItemForm.get('name').value?.length || 0}}/100</mat-hint>\r\n      <mat-error *ngIf=\"newItemForm.get('name')\">{{getErrorMsg('name')}}</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width\">\r\n      <textarea matInput placeholder=\"Item Comments\" formControlName=\"comments\"></textarea>\r\n      <mat-hint align=\"end\">{{newItemForm.get('comments').value?.length}}/1000</mat-hint>\r\n      <mat-error *ngIf=\"newItemForm.get('comments')\">{{getErrorMsg('comments')}}</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width\">\r\n      <textarea matInput placeholder=\"Safety Notes\" formControlName=\"safetyNotes\"></textarea>\r\n      <mat-hint align=\"end\">{{newItemForm.get('safetyNotes').value?.length}}/1000</mat-hint>\r\n      <mat-error *ngIf=\"newItemForm.get('safetyNotes')\">{{getErrorMsg('safetyNotes')}}</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width\">\r\n      <textarea matInput placeholder=\"Exceptions\" formControlName=\"exceptions\"></textarea>\r\n      <mat-hint align=\"end\">{{newItemForm.get('exceptions').value?.length}}/1000</mat-hint>\r\n      <mat-error *ngIf=\"newItemForm.get('exceptions')\">{{getErrorMsg('exceptions')}}</mat-error>\r\n    </mat-form-field>\r\n  </form>\r\n</mat-dialog-content>\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"cancel()\">Cancel</button>\r\n  <button mat-raised-button color=\"primary\" (click)=\"submitForm()\" [disabled]=\"!newItemForm.valid\">Submit</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/request-form/request-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/request-form/request-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<h1 class=\"mat-display-1 center-align\">Novel Life Strategy Enrichment Request Form</h1>\r\n\r\n<form [formGroup]=\"enrichmentRequestFormGroup\">\r\n  <mat-horizontal-stepper [linear]=\"true\" #stepper formArrayName=\"requestForm\">\r\n    <mat-step formGroupName=\"0\" [stepControl]=\"requestForm?.get([0])\" label=\"Animal Data\">\r\n      <div>\r\n        <!-- Foreign Key: 'department' table -->\r\n        <mat-form-field id=\"dept\" name=\"dept\">\r\n          <mat-select placeholder=\"Department Name\" formControlName=\"department\" required>\r\n            <mat-option *ngFor=\"let dept of departments\" [value]=\"dept\">\r\n              {{dept.departmentName}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <!-- Foreign Key: 'species' table -->\r\n        <mat-form-field id=\"species\" name=\"species\">\r\n          <mat-select placeholder=\"Species Name\" formControlName=\"species\" required>\r\n            <mat-option *ngFor=\"let spec of species\" [value]=\"spec\">\r\n              {{spec.speciesName}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <mat-form-field id=\"animal\" name=\"animal\">\r\n          <mat-select placeholder=\"Animal\" formControlName=\"animal\" required>\r\n            <mat-option *ngFor=\"let animal of animals\" [value]=\"animal.id\">\r\n              {{animal.isisNumber}} - {{animal.species}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-raised-button class=\"left-margin\" (click)=\"openNewAnimalDialog()\">Add New Animal</button>\r\n      </div>\r\n      <div>\r\n        <button mat-raised-button matStepperNext type=\"button\">Next</button>\r\n      </div>\r\n    </mat-step>\r\n    <mat-step formGroupName=\"1\" [stepControl]=\"requestForm?.get([1])\" label=\"Type of Enrichment\">\r\n      <div>\r\n        <!-- Foreign Key: 'item' table -->\r\n        <mat-form-field id=\"itemId\" name=\"itemId\">\r\n          <mat-select placeholder=\"Select Item\" formControlName=\"itemId\" required>\r\n            <mat-option *ngFor=\"let item of items\" [value]=\"item.id\">\r\n              {{item.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-raised-button class=\"left-margin\" (click)=\"openNewItemDialog()\">Add New Item</button>\r\n      </div>\r\n      <div>\r\n        <!-- Normal Key: Enrichment_Name -->\r\n        <label for=\"enrichmentName\">Enrichment Name: </label>\r\n        <mat-form-field id=\"enrichmentName\" name=\"enrichmentName\">\r\n          <input matInput placeholder=\"Name\" formControlName=\"enrichmentName\" required>\r\n          <mat-hint align=\"end\">{{requestForm.at(1).get('enrichmentName').value?.length || 0}}/50</mat-hint>\r\n          <mat-error *ngIf=\"requestForm.at(1).get('enrichmentName')\">{{getErrorMsg(1, 'enrichmentName')}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <!-- Normal Key: Enrichment_Description -->\r\n        <label for=\"description\">Describe the Enrichment:</label>\r\n        <br/>\r\n        <mat-form-field class=\"increased-width\" id=\"description\" name=\"description\">\r\n          <textarea matInput placeholder=\"Details, articles, any data if possible\" formControlName=\"enrichmentDescription\" required></textarea>\r\n          <mat-hint align=\"end\">{{requestForm.at(1).get('enrichmentDescription').value?.length || 0}}/1000</mat-hint>\r\n          <mat-error *ngIf=\"requestForm.at(1).get('enrichmentDescription')\">{{getErrorMsg(1, 'enrichmentDescription')}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <!-- Foreign Key: 'location' table -->\r\n        <label for=\"location\">Where will it be presented?</label>\r\n        <br/>\r\n        <mat-form-field id=\"location\" name=\"location\">\r\n          <mat-select placeholder=\"Location Name\" formControlName=\"enrichmentLocation\" required>\r\n            <mat-option *ngFor=\"let loc of locations\" [value]=\"loc.id\">\r\n              {{loc.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <!-- Normal Key: Enrichment_PresentationMethod -->\r\n        <label for=\"presented\">How will it be presented?:</label>\r\n        <br/>\r\n        <mat-form-field class=\"increased-width\" id=\"presented\" name=\"presented\">\r\n          <textarea matInput placeholder=\"Presentation\" formControlName=\"enrichmentPresentationMethod\" required></textarea>\r\n          <mat-hint align=\"end\">{{requestForm.at(1).get('enrichmentPresentationMethod').value?.length || 0}}/1000</mat-hint>\r\n          <mat-error *ngIf=\"requestForm.at(1).get('enrichmentPresentationMethod')\">{{getErrorMsg(1, 'enrichmentPresentationMethod')}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <!-- Normal Key: Enrichment_TimeStart and Enrichment_TimeEnd -->\r\n        <label for=\"enrichmentWhen\">Time of day/night presented: </label>\r\n        <mat-form-field id=\"enrichmentWhen\" name=\"enrichmentWhen\">\r\n          <input matInput placeholder=\"Time\" formControlName=\"enrichmentDayNightTime\" required>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <!-- Normal Key: Enrichment_Frequency -->\r\n        <label for=\"enrichmentFreq\">Frequency/Duration of presentation: </label>\r\n        <mat-form-field id=\"enrichmentFreq\" name=\"enrichmentFreq\">\r\n          <input matInput placeholder=\"Frequency/Duration\" formControlName=\"enrichmentFrequency\" required>\r\n          <mat-error *ngIf=\"requestForm.at(1).get('enrichmentFrequency')\">{{getErrorMsg(1, 'enrichmentFrequency')}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"button-row\">\r\n        <button mat-raised-button matStepperPrevious type=\"button\">Back</button>\r\n        <button mat-raised-button matStepperNext type=\"button\">Next</button>\r\n      </div>\r\n    </mat-step>\r\n    <mat-step formGroupName=\"2\" [stepControl]=\"requestForm?.get([2])\" label=\"Current Data\">\r\n      <div>\r\n        <!-- Normal Key: Enrichment_LifeStrategies -->\r\n        <label for=\"lifeStrategies\">Have you completed a \"Life Strategies\" worksheet and researched the species' natural history?</label>\r\n        <br/>\r\n        <mat-form-field id=\"lifeStrategies\" name=\"lifeStrategies\">\r\n          <mat-select placeholder=\"Yes/No\" formControlName=\"lifeStrategiesWksht\" required>\r\n            <mat-option [value]=\"true\">Yes</mat-option>\r\n            <mat-option [value]=\"false\">No</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <!-- Normal Key: Enrichment_PreviousUse -->\r\n        <label for=\"anotherPlace\">Has another department or zoo used this enrichment before?</label>\r\n        <br/>\r\n        <mat-form-field id=\"anotherPlace\" name=\"anotherPlace\">\r\n          <mat-select placeholder=\"Yes/No\" formControlName=\"anotherDeptZoo\" required>\r\n            <mat-option [value]=\"true\">Yes</mat-option>\r\n            <mat-option [value]=\"false\">No</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <!-- Normal Key: Enrichment_Contact -->\r\n        <label for=\"anotherPlaceMoreInfo\">Have they been contacted for more information?</label>\r\n        <br/>\r\n        <mat-form-field id=\"anotherPlaceMoreInfo\" name=\"anotherPlaceMoreInfo\">\r\n          <mat-select placeholder=\"Yes/No\" formControlName=\"anotherDeptZooMoreInfo\" required>\r\n            <mat-option [value]=\"true\">Yes</mat-option>\r\n            <mat-option [value]=\"false\">No</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <!-- Normal Key: Enrichment_SafetyQuestions -->\r\n        <label for=\"safety\">Have you addressed safety questions in \"Enrichment Protocol\"?</label>\r\n        <br/>\r\n        <mat-form-field id=\"safety\" name=\"safety\">\r\n          <mat-select placeholder=\"Yes/No\" formControlName=\"safetyQuestion\" required>\r\n            <mat-option [value]=\"true\">Yes</mat-option>\r\n            <mat-option [value]=\"false\">No</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n        <br/>\r\n      <div>\r\n        <!-- Normal Key: Enrichment_RisksHazards -->\r\n        <label for=\"risks\">Have risks and hazards been minimized?</label>\r\n        <br/>\r\n        <mat-form-field id=\"risks\" name=\"risks\">\r\n          <mat-select placeholder=\"Yes/No\" formControlName=\"risksQuestion\" required>\r\n            <mat-option [value]=\"true\">Yes</mat-option>\r\n            <mat-option [value]=\"false\">No</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n        <br/>\r\n      <div>\r\n        <!-- Normal Key: Enrichment_Concerns -->\r\n        <mat-form-field class=\"increased-width\">\r\n          <textarea matInput placeholder=\"Detail any concerns here\" formControlName=\"safetyComment\"></textarea>\r\n          <mat-hint align=\"end\">{{requestForm.at(2).get('safetyComment').value?.length || 0}}/1000</mat-hint>\r\n          <mat-error *ngIf=\"requestForm.at(2).get('safetyComment')\">{{getErrorMsg(2, 'safetyComment')}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"button-row\">\r\n        <button mat-raised-button matStepperPrevious>Back</button>\r\n        <button mat-raised-button matStepperNext>Next</button>\r\n      </div>\r\n    </mat-step>\r\n    <mat-step formGroupName=\"3\" [stepControl]=\"requestForm?.get([3])\" label=\"Goal of Enrichment\">\r\n      <div>\r\n        <!-- Normal Key: Enrichment_Goal -->\r\n        <label for=\"behaviors\">What natural behaviors do you expect this enrichment to encourage/elicit?</label>\r\n        <mat-form-field id=\"behaviors\" name=\"behaviors\" class=\"full-width\">\r\n          <textarea matInput placeholder=\"Natural Behaviors\" formControlName=\"naturalBehaviors\" required></textarea>\r\n          <mat-hint align=\"end\">{{requestForm.at(3).get('naturalBehaviors').value?.length || 0}}/1000</mat-hint>\r\n          <mat-error *ngIf=\"requestForm.at(3).get('naturalBehaviors')\">{{getErrorMsg(3, 'naturalBehaviors')}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"button-row\">\r\n        <button mat-raised-button matStepperPrevious type=\"button\">Back</button>\r\n        <button mat-raised-button matStepperNext type=\"button\">Next</button>\r\n      </div>\r\n    </mat-step>\r\n    <mat-step formGroupName=\"4\" [stepControl]=\"requestForm?.get([4])\" label=\"Materials/Cost Analysis\">\r\n      <div>\r\n        <!-- Normal Key: Enrichment_Source -->\r\n        <label for=\"source\">Source:</label>\r\n        <br/>\r\n        <mat-radio-group class=\"radio-group left-margin\" id=\"source\" name=\"source\" formControlName=\"source\" required>\r\n          <mat-radio-button class=\"radio-button\" value=\"To Be Purchased\">Needs to be purchased</mat-radio-button>\r\n          <mat-radio-button class=\"radio-button\" value=\"Zoo Grounds\">Zoo grounds</mat-radio-button>\r\n          <mat-radio-button class=\"radio-button\" value=\"Donation\">Donation</mat-radio-button>\r\n          <mat-radio-button class=\"radio-button\" value=\"Other\">Other</mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <div *ngIf=\"requestForm?.get([4]).value.source === 'other'\" class=\"left-margin\">\r\n        <!-- Normal Key: Enrichment_Source (will override previous entry) -->\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Other source\" formControlName=\"otherSource\" required>\r\n          <mat-hint align=\"end\">{{requestForm.at(4).get('otherSource').value?.length || 0}}/50</mat-hint>\r\n          <mat-error *ngIf=\"requestForm.at(4).get('otherSource')\">{{getErrorMsg(4, 'otherSource')}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <!-- Normal Key: Enrichment_TimeRequired -->\r\n        <label for=\"timeRequired\">Time Required: </label>\r\n        <mat-form-field id=\"timeRequired\" name=\"timeRequired\">\r\n          <input matInput placeholder=\"Time required\" formControlName=\"timeRequired\" required>\r\n          <mat-error *ngIf=\"requestForm.at(4).get('timeRequired')\">{{getErrorMsg(4, 'timeRequired')}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <!-- Normal Key: Enrichment_Construction -->\r\n        <label for=\"construct\">Who will construct and how?: </label>\r\n        <mat-form-field id=\"construct\" name=\"construct\" class=\"full-width\">\r\n          <textarea matInput placeholder=\"Who/How?\" formControlName=\"whoConstructs\" required></textarea>\r\n          <mat-hint align=\"end\">{{requestForm.at(4).get('whoConstructs').value?.length || 0}}/1000</mat-hint>\r\n          <mat-error *ngIf=\"requestForm.at(4).get('whoConstructs')\">{{getErrorMsg(4, 'whoConstructs')}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <!-- Normal Key: Enrichment_Volunteers -->\r\n        <label for=\"volunteer\">Can volunteer(s)/docent(s) be utilized? </label>\r\n        <mat-form-field id=\"volunteer\" name=\"volunteer\">\r\n          <mat-select placeholder=\"Yes/No\" formControlName=\"volunteerDocentUtilized\" required>\r\n            <mat-option [value]=\"true\">Yes</mat-option>\r\n            <mat-option [value]=\"false\">No</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <!-- Normal Key: Enrichment_Inventory -->\r\n        <label for=\"inventory\">For inventory use, please select applicable categories for this enrichment: </label>\r\n        <mat-form-field id=\"inventory\" name=\"inventory\" class=\"full-width\">\r\n          <mat-chip-list #categoryList>\r\n            <mat-chip\r\n              *ngFor=\"let category of categories\"\r\n              [selectable]=\"selectable\"\r\n              [removable]=\"removable\"\r\n              (removed)=\"remove(category)\">\r\n              {{category}}\r\n              <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n            </mat-chip>\r\n            <input\r\n              placeholder=\"Categories\"\r\n              #categoryInput\r\n              formControlName=\"enrichmentCategory\"\r\n              [matAutocomplete]=\"auto\"\r\n              [matChipInputFor]=\"categoryList\"\r\n              [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n              [matChipInputAddOnBlur]=\"addOnBlur\"\r\n              (matChipInputTokenEnd)=\"add($event)\" required>\r\n          </mat-chip-list>\r\n          <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n            <mat-option *ngFor=\"let category of filteredCategories | async\" [value]=\"category\">\r\n              {{category}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <!-- Normal Key: Enrichment_Submittor -->\r\n        <label for=\"name\">Your name: </label>\r\n        <mat-form-field id=\"name\" name=\"name\">\r\n          <input matInput placeholder=\"John Smith\" formControlName=\"nameOfSubmitter\" required>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <!-- Normal Key: Enrichment_DateSubmitted -->\r\n        <label for=\"date\">Date of submission: </label>\r\n        <mat-form-field id=\"date\" name=\"date\">\r\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" formControlName=\"dateOfSubmission\" required>\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"button-row\">\r\n        <button mat-raised-button matStepperPrevious type=\"button\">Back</button>\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"!enrichmentRequestFormGroup.valid\" (click)=\"submitForm(stepper)\">Submit</button>\r\n      </div>\r\n    </mat-step>\r\n  </mat-horizontal-stepper>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/request-form/request-form.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/request-form/request-form.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".increased-width {\n  width: 500px; }\n\n.full-width {\n  width: 100%; }\n\n.radio-group {\n  display: inline-flex;\n  flex-direction: column; }\n\n.radio-button {\n  margin: 5px; }\n\n.button-row button {\n  margin-right: 8px; }\n\n.left-margin {\n  margin-left: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWVzdC1mb3JtL0M6XFxVc2Vyc1xcWmFjaFxcRG9jdW1lbnRzXFxhU3ByaW5nMjAxOVxcQ2Fwc3RvbmVcXFBHQi1Bbmd1bGFyXFxCZWhhdmlvcmFsRW5yaWNobWVudC1Bbmd1bGFyL3NyY1xcYXBwXFxyZXF1ZXN0LWZvcm1cXHJlcXVlc3QtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3QtZm9ybS9yZXF1ZXN0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5jcmVhc2VkLXdpZHRoIHtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5yYWRpby1ncm91cCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4ucmFkaW8tYnV0dG9uIHtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4uYnV0dG9uLXJvdyBidXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbi5sZWZ0LW1hcmdpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/request-form/request-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/request-form/request-form.component.ts ***!
  \********************************************************/
/*! exports provided: RequestFormComponent, InsertNewAnimalDialogComponent, InsertNewItemDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestFormComponent", function() { return RequestFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertNewAnimalDialogComponent", function() { return InsertNewAnimalDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertNewItemDialogComponent", function() { return InsertNewItemDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_main_enrichment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/main/enrichment.service */ "./src/app/shared/main/enrichment.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_user_current_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/user/current-user.service */ "./src/app/auth/user/current-user.service.ts");








var RequestFormComponent = /** @class */ (function () {
    function RequestFormComponent(formBuilder, service, snackbar, currentUser, dialog) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.snackbar = snackbar;
        this.currentUser = currentUser;
        this.dialog = dialog;
        // Numbers only regex
        this.numberRegex = '^[0-9]*$';
        // Category chips variables
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        this.categories = [];
    }
    Object.defineProperty(RequestFormComponent.prototype, "requestForm", {
        get: function () { return this.enrichmentRequestFormGroup.get('requestForm'); },
        enumerable: true,
        configurable: true
    });
    RequestFormComponent.prototype.ngOnInit = function () {
        this.submitter = this.currentUser.getUser();
        this.initFormGroup();
        this.enrichmentFormControl = this.enrichmentRequestFormGroup.controls['requestForm'];
        this.getDepartmentsFromDb();
        this.getCategoriesFromDb();
        this.getSpeciesFromDb();
        this.getItemsFromDb();
        this.getAnimalsFromDb();
        this.getLocationsFromDb();
    };
    RequestFormComponent.prototype.initFormGroup = function () {
        this.enrichmentRequestFormGroup = this.formBuilder.group({
            requestForm: this.formBuilder.array([
                this.formBuilder.group({
                    department: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    species: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    animal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]) // Enrichment_Animal
                }),
                this.formBuilder.group({
                    itemId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    enrichmentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
                    enrichmentDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1000)]),
                    enrichmentLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    enrichmentPresentationMethod: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1000)]),
                    enrichmentDayNightTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    enrichmentFrequency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.numberRegex)]) // Enrichment_Frequency: int
                }),
                this.formBuilder.group({
                    lifeStrategiesWksht: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    anotherDeptZoo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    anotherDeptZooMoreInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    safetyQuestion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    risksQuestion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    safetyComment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1000)) // Enrichment_Concerns
                }),
                this.formBuilder.group({
                    naturalBehaviors: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1000)]) // Enrichment_Goal
                }),
                this.formBuilder.group({
                    source: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
                    otherSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)),
                    timeRequired: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.numberRegex)]),
                    whoConstructs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1000)]),
                    volunteerDocentUtilized: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    enrichmentCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([''], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    nameOfSubmitter: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.submitter.firstName + " " + this.submitter.lastName, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    dateOfSubmission: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: new Date(), disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required) // Enrichment_DateSubmitted
                })
            ])
        });
    };
    RequestFormComponent.prototype.submitForm = function (stepper) {
        var _this = this;
        console.log('form submitted:');
        console.log(this.toSingleObject(this.enrichmentRequestFormGroup.value));
        this.service.submitEnrichmentRequestForm(this.toSingleObject(this.enrichmentRequestFormGroup.value)).subscribe(function (data) {
            if (!data.error) {
                _this.snackbar.open(data.message, 'OK', {
                    duration: 5000
                });
                stepper.reset();
            }
            else {
                // do NOT reset form
                _this.snackbar.open("ERROR: " + data.errorMsg, 'OK', {
                    duration: 5000
                });
            }
        });
    };
    RequestFormComponent.prototype.toSingleObject = function (groupValue) {
        var requestArray = groupValue.requestForm;
        var completeForm = {
            department: requestArray[0].department,
            species: requestArray[0].species,
            animalId: requestArray[0].animal,
            itemId: requestArray[1].itemId,
            enrichmentName: requestArray[1].enrichmentName,
            enrichmentDescription: requestArray[1].enrichmentDescription,
            enrichmentLocation: requestArray[1].enrichmentLocation,
            enrichmentPresentationMethod: requestArray[1].enrichmentPresentationMethod,
            enrichmentDayNightTime: requestArray[1].enrichmentDayNightTime,
            enrichmentFrequency: requestArray[1].enrichmentFrequency,
            lifeStrategiesWksht: requestArray[2].lifeStrategiesWksht,
            anotherDeptZoo: requestArray[2].anotherDeptZoo,
            anotherDeptZooMoreInfo: requestArray[2].anotherDeptZooMoreInfo,
            safetyQuestion: requestArray[2].safetyQuestion,
            risksQuestion: requestArray[2].risksQuestion,
            safetyComment: requestArray[2].safetyComment,
            naturalBehaviors: requestArray[3].naturalBehaviors,
            source: requestArray[4].source,
            otherSource: requestArray[4].otherSource,
            timeRequired: requestArray[4].timeRequired,
            whoConstructs: requestArray[4].whoConstructs,
            volunteerDocentUtilized: requestArray[4].volunteerDocentUtilized,
            enrichmentCategory: this.categories.join(','),
            nameOfSubmitter: {
                name: this.submitter.firstName + " " + this.submitter.lastName,
                id: this.submitter.id,
                username: "" + this.submitter.username
            },
            dateOfSubmission: new Date()
        };
        return completeForm;
    };
    RequestFormComponent.prototype.getDepartmentsFromDb = function () {
        var _this = this;
        this.service.getDepartments().subscribe(function (data) {
            _this.departments = data;
        }, function (err) {
            console.error('Error getting departments:', err);
        });
    };
    RequestFormComponent.prototype.getCategoriesFromDb = function () {
        var _this = this;
        this.service.getCategories().subscribe(function (data) {
            _this.allCategories = data;
            _this.allCategoryNames = data.map(function (cat) { return cat.categoryName; });
            _this.filteredCategories = _this.enrichmentFormControl.at(4).get('enrichmentCategory').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (category) { return category ? _this._filter(category) : _this.allCategoryNames.slice(); }));
        }, function (err) {
            console.error('Error getting categories:', err);
        });
    };
    RequestFormComponent.prototype.getSpeciesFromDb = function () {
        var _this = this;
        this.service.getSpecies().subscribe(function (data) {
            _this.species = data;
        }, function (err) {
            console.error('Error getting species:', err);
        });
    };
    RequestFormComponent.prototype.getItemsFromDb = function () {
        var _this = this;
        this.service.getItems().subscribe(function (data) {
            _this.items = data;
        }, function (err) {
            console.error('Error getting items:', err);
        });
    };
    RequestFormComponent.prototype.getAnimalsFromDb = function () {
        var _this = this;
        this.service.getAnimals().subscribe(function (data) {
            _this.animals = data;
        }, function (err) {
            console.error('Error getting animals:', err);
        });
    };
    RequestFormComponent.prototype.getLocationsFromDb = function () {
        var _this = this;
        this.service.getLocations().subscribe(function (data) {
            _this.locations = data;
        }, function (err) {
            console.error('Error getting locations:', err);
        });
    };
    RequestFormComponent.prototype.getErrorMsg = function (index, formControlName) {
        if (this.enrichmentFormControl.at(index).get(formControlName).hasError('required')) {
            return 'Input is required.';
        }
        else if (this.enrichmentFormControl.at(index).get(formControlName).hasError('maxlength')) {
            return 'Input exceeds max length.';
        }
        else if (this.enrichmentFormControl.at(index).get(formControlName).hasError('pattern')) {
            return 'Input must be a number';
        }
        else {
            return 'Invalid input.';
        }
    };
    RequestFormComponent.prototype.add = function (event) {
        // Add category only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            // Add our category
            if ((value || '').trim()) {
                this.categories.push(value.trim());
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.enrichmentFormControl.at(4).get('enrichmentCategory').setValue(['']);
        }
    };
    RequestFormComponent.prototype.remove = function (category) {
        var index = this.categories.indexOf(category);
        if (index >= 0) {
            this.categories.splice(index, 1);
        }
    };
    RequestFormComponent.prototype.selected = function (event) {
        this.categories.push(event.option.viewValue);
        this.categoryInput.nativeElement.value = '';
        this.enrichmentFormControl.at(4).get('enrichmentCategory').setValue(null);
    };
    RequestFormComponent.prototype._filter = function (value) {
        var filterValue = value == null ? '' : value.toLowerCase();
        return this.allCategoryNames.filter(function (category) { return category.toLowerCase().indexOf(filterValue) === 0; });
    };
    RequestFormComponent.prototype.openNewItemDialog = function () {
        var _this = this;
        var itemDialogRef = this.dialog.open(InsertNewItemDialogComponent);
        itemDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.getItemsFromDb();
            }
        });
    };
    RequestFormComponent.prototype.openNewAnimalDialog = function () {
        var _this = this;
        var animalDialogRef = this.dialog.open(InsertNewAnimalDialogComponent, {
            data: { species: this.species, locations: this.locations }
        });
        animalDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.getAnimalsFromDb();
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('categoryInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RequestFormComponent.prototype, "categoryInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"])
    ], RequestFormComponent.prototype, "matAutocomplete", void 0);
    RequestFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-form',
            template: __webpack_require__(/*! ./request-form.component.html */ "./src/app/request-form/request-form.component.html"),
            styles: [__webpack_require__(/*! ./request-form.component.scss */ "./src/app/request-form/request-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_main_enrichment_service__WEBPACK_IMPORTED_MODULE_3__["EnrichmentService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _auth_user_current_user_service__WEBPACK_IMPORTED_MODULE_7__["CurrentUserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], RequestFormComponent);
    return RequestFormComponent;
}());

var InsertNewAnimalDialogComponent = /** @class */ (function () {
    function InsertNewAnimalDialogComponent(dialogRef, data, service, snackbar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.service = service;
        this.snackbar = snackbar;
        this.newAnimalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            isisNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')]),
            species: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            housed: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            activityCycle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    InsertNewAnimalDialogComponent.prototype.cancel = function () {
        this.dialogRef.close(false);
    };
    InsertNewAnimalDialogComponent.prototype.submitNewAnimalForm = function () {
        var _this = this;
        this.service.submitNewAnimal(this.newAnimalForm).subscribe(function (data) {
            _this.snackbar.open(data.error ? data.errorMsg : data.message, 'OK', {
                duration: 3000
            });
            if (!data.error) {
                _this.dialogRef.close(true);
            }
        });
    };
    InsertNewAnimalDialogComponent.prototype.getErrorMsg = function (formControlName) {
        if (this.newAnimalForm.get(formControlName).hasError('required')) {
            return 'Input is required.';
        }
        else if (this.newAnimalForm.get(formControlName).hasError('maxlength')) {
            return 'Input exceeds max length.';
        }
        else if (this.newAnimalForm.get(formControlName).hasError('pattern')) {
            return 'Input must be a number.';
        }
        else {
            return 'Invalid input.';
        }
    };
    InsertNewAnimalDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-insert-new-animal-dialog',
            template: __webpack_require__(/*! ./insert-new-animal-dialog.html */ "./src/app/request-form/insert-new-animal-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, _shared_main_enrichment_service__WEBPACK_IMPORTED_MODULE_3__["EnrichmentService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], InsertNewAnimalDialogComponent);
    return InsertNewAnimalDialogComponent;
}());

var InsertNewItemDialogComponent = /** @class */ (function () {
    function InsertNewItemDialogComponent(dialogRef, changeDetector, service, snackbar) {
        this.dialogRef = dialogRef;
        this.changeDetector = changeDetector;
        this.service = service;
        this.snackbar = snackbar;
        this.newItemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1000)]),
            safetyNotes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1000)]),
            exceptions: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1000)])
        });
    }
    InsertNewItemDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    InsertNewItemDialogComponent.prototype.submitForm = function () {
        var _this = this;
        this.service.submitNewItem(this.newItemForm).subscribe(function (data) {
            _this.snackbar.open(data.message || data.errorMsg, 'OK', {
                duration: 3000
            });
            if (!data.error) {
                _this.dialogRef.close(true);
            }
        }, function (err) {
            console.error('error submitting item:');
            console.error(err);
        });
    };
    InsertNewItemDialogComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            var file = event.target.files[0];
            reader.onloadend = function () {
                // Sets value to Base64 encoded string
                _this.newItemForm.patchValue({
                    photo: reader.result
                });
                // need to run CD since file load runs outside of zone
                _this.changeDetector.markForCheck();
            };
            reader.readAsDataURL(file);
        }
    };
    InsertNewItemDialogComponent.prototype.getErrorMsg = function (formControlName) {
        if (this.newItemForm.get(formControlName).hasError('required')) {
            return 'Input is required.';
        }
        else if (this.newItemForm.get(formControlName).hasError('maxlength')) {
            return 'Input exceeds max length.';
        }
        else {
            return 'Invalid input.';
        }
    };
    InsertNewItemDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-insert-new-item-dialog',
            template: __webpack_require__(/*! ./insert-new-item-dialog.html */ "./src/app/request-form/insert-new-item-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _shared_main_enrichment_service__WEBPACK_IMPORTED_MODULE_3__["EnrichmentService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], InsertNewItemDialogComponent);
    return InsertNewItemDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/main/enrichment.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/main/enrichment.service.ts ***!
  \***************************************************/
/*! exports provided: EnrichmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrichmentService", function() { return EnrichmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");
/* harmony import */ var src_app_auth_user_current_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/user/current-user.service */ "./src/app/auth/user/current-user.service.ts");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var fileHttpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'multipart/form-data'
    })
};
var EnrichmentService = /** @class */ (function () {
    function EnrichmentService(http, globals, currentUser) {
        this.http = http;
        this.globals = globals;
        this.currentUser = currentUser;
    }
    EnrichmentService.prototype.addUser = function (form) {
        var requestBody = {
            firstName: form.value.firstName,
            lastName: form.value.lastName,
            username: form.value.username,
            status: 0,
            department: form.value.department
        };
        return this.http.post(this.globals.baseUrl + "/addUser", requestBody, httpOptions);
    };
    EnrichmentService.prototype.submitEnrichmentRequestForm = function (completeForm) {
        return this.http.post(this.globals.baseUrl + "/enrichmentRequest", completeForm, httpOptions);
    };
    EnrichmentService.prototype.submitNewItem = function (itemForm) {
        var requestBody = {
            itemName: itemForm.value.name,
            base64EncodedPhoto: itemForm.value.photo,
            comments: itemForm.value.comments,
            safetyNotes: itemForm.value.safetyNotes,
            exceptions: itemForm.value.exceptions,
            submittor: this.currentUser.getUser().id
        };
        return this.http.post(this.globals.baseUrl + "/newItem", requestBody);
    };
    EnrichmentService.prototype.submitNewAnimal = function (animalForm) {
        var requestBody = {
            isisNumber: animalForm.value.isisNumber,
            species: animalForm.value.species,
            location: animalForm.value.location,
            housed: animalForm.value.housed,
            activityCycle: animalForm.value.activityCycle,
            age: animalForm.value.age
        };
        return this.http.post(this.globals.baseUrl + "/newAnimal", requestBody, httpOptions);
    };
    EnrichmentService.prototype.changePassword = function (userId, userName, passForm) {
        var requestBody = {
            userId: userId,
            userName: userName,
            oldPassword: passForm.value.oldPassword,
            newPassword: passForm.value.newPassword
        };
        return this.http.post(this.globals.baseUrl + "/changePassword", requestBody, httpOptions);
    };
    EnrichmentService.prototype.addDepartment = function (departmentName) {
        var requestBody = {
            departmentName: departmentName
        };
        return this.http.post(this.globals.baseUrl + "/newDept", requestBody, httpOptions);
    };
    EnrichmentService.prototype.removeDepartmentById = function (departmentId) {
        var requestBody = {
            departmentId: departmentId
        };
        return this.http.post(this.globals.baseUrl + "/removeDept", requestBody, httpOptions);
    };
    EnrichmentService.prototype.addSpecies = function (newSpeciesForm) {
        var requestBody = {
            speciesName: newSpeciesForm.value.speciesName,
            speciesDescription: newSpeciesForm.value.speciesDescription
        };
        return this.http.post(this.globals.baseUrl + "/addSpecies", requestBody, httpOptions);
    };
    EnrichmentService.prototype.removeSpeciesbyId = function (speciesId) {
        var requestBody = {
            speciesId: speciesId
        };
        return this.http.post(this.globals.baseUrl + "/removeSpecies", requestBody, httpOptions);
    };
    EnrichmentService.prototype.addCategory = function (cat) {
        var requestBody = {
            categoryName: cat.value.catName,
            categoryDescription: cat.value.catDescription
        };
        return this.http.post(this.globals.baseUrl + "/addCategory", requestBody, httpOptions);
    };
    EnrichmentService.prototype.deactivateUsers = function (users) {
        return this.http.post(this.globals.baseUrl + "/removeUsers", users, httpOptions);
    };
    EnrichmentService.prototype.reactivateUsers = function (users) {
        return this.http.post(this.globals.baseUrl + "/reactivateUsers", users, httpOptions);
    };
    EnrichmentService.prototype.resetPasswords = function (users) {
        return this.http.post(this.globals.baseUrl + "/resetUserPasswords", users, httpOptions);
    };
    EnrichmentService.prototype.editUser = function (user) {
        var requestBody = {
            firstName: user.value.firstName,
            lastName: user.value.lastName,
            username: user.value.username,
            userId: user.value.userId,
            department: user.value.department,
        };
        return this.http.post(this.globals.baseUrl + "/editUser", requestBody, httpOptions);
    };
    EnrichmentService.prototype.uploadNewHomepageImage = function (imageForm) {
        var requestBody = {
            base64EncodedImage: imageForm.value.image
        };
        return this.http.post(this.globals.baseUrl + "/homepageImage", requestBody);
    };
    EnrichmentService.prototype.getHomepageImage = function () {
        return this.http.get(this.globals.baseUrl + "/getHomepageImage");
    };
    EnrichmentService.prototype.getDepartments = function () {
        return this.http.get(this.globals.baseUrl + "/departments");
    };
    EnrichmentService.prototype.getCategories = function () {
        return this.http.get(this.globals.baseUrl + "/categories");
    };
    EnrichmentService.prototype.getSpecies = function () {
        return this.http.get(this.globals.baseUrl + "/species");
    };
    EnrichmentService.prototype.getItems = function () {
        return this.http.get(this.globals.baseUrl + "/items");
    };
    EnrichmentService.prototype.getUsers = function () {
        return this.http.get(this.globals.baseUrl + "/userList");
    };
    EnrichmentService.prototype.getAnimals = function () {
        return this.http.get(this.globals.baseUrl + "/animals");
    };
    EnrichmentService.prototype.getLocations = function () {
        return this.http.get(this.globals.baseUrl + "/locations");
    };
    EnrichmentService.prototype.getApprovedEntry = function () {
        return this.http.get(this.globals.baseUrl + "/approvedEntries");
    };
    EnrichmentService.prototype.getEnrichmentForm = function () {
        return this.http.get(this.globals.baseUrl + "/getEnrichmentForm");
    };
    EnrichmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"],
            src_app_auth_user_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"]])
    ], EnrichmentService);
    return EnrichmentService;
}());



/***/ }),

/***/ "./src/app/shared/main/incident.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/main/incident.service.ts ***!
  \*************************************************/
/*! exports provided: IncidentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentService", function() { return IncidentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var IncidentService = /** @class */ (function () {
    function IncidentService(http, globals) {
        this.http = http;
        this.globals = globals;
    }
    IncidentService.prototype.signUp = function (username, password) {
        var requestBody = {
            username: username,
            password: password
        };
        return this.http.post(this.globals.baseUrl + "/signUpUser", requestBody, httpOptions);
    };
    IncidentService.prototype.submitIncidentReportForm = function (completeForm) {
        return this.http.post(this.globals.baseUrl + "/enrichmentRequest", completeForm, httpOptions);
    };
    IncidentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], IncidentService);
    return IncidentService;
}());



/***/ }),

/***/ "./src/app/user-account/user-account.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-account/user-account.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<h1 class=\"mat-display-1 center-align\">My Account</h1>\r\n\r\n<mat-card class=\"mat-elevation-z8\">\r\n  <mat-card-title>User Details</mat-card-title>\r\n  <mat-card-content>\r\n    <p>Name: {{userFirstName}} {{userLastName}}</p>\r\n    <p>Username: {{userName}}</p>\r\n    <p>Department: {{userDepartment}}</p>\r\n    <p>Password: **********</p>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button (click)=\"toggleChangePassword(true)\" [disabled]=\"changePasswordToggle\">Change Password</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n<br/>\r\n<mat-card *ngIf=\"changePasswordToggle\" class=\"mat-elevation-z8\">\r\n  <mat-card-title>Change Password</mat-card-title>\r\n  <mat-card-content>\r\n      <form class=\"form-css\" [formGroup]=\"changePasswordForm\" #formDirective=\"ngForm\" (ngSubmit)=\"changePassword()\">\r\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n          <mat-label>Old Password</mat-label>\r\n          <input matInput formControlName=\"oldPassword\" type=\"password\" placeholder=\"hunter2\" required/>\r\n          <mat-error *ngIf=\"changePasswordForm.get('oldPassword').invalid\">{{getErrorMsg('oldPassword')}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n          <mat-label>New Password</mat-label>\r\n          <input matInput formControlName=\"newPassword\" type=\"password\" placeholder=\"ineedaweapon\" required/>\r\n          <mat-error *ngIf=\"changePasswordForm.get('newPassword').invalid\">{{getErrorMsg('newPassword')}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n          <mat-label>Confirm New Password</mat-label>\r\n          <input matInput formControlName=\"newPassword2\" type=\"password\" placeholder=\"ineedaweapon\" required/>\r\n          <mat-error *ngIf=\"changePasswordForm.get('newPassword2').invalid\">{{getErrorMsg('newPassword2')}}</mat-error>\r\n        </mat-form-field>\r\n      </form>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-raised-button (click)=\"toggleChangePassword(false)\">Cancel</button>\r\n    <button mat-button (click)=\"changePassword()\" [disabled]=\"!changePasswordForm.valid\" color=\"primary\">Submit</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/user-account/user-account.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/user-account/user-account.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItYWNjb3VudC91c2VyLWFjY291bnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user-account/user-account.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-account/user-account.component.ts ***!
  \********************************************************/
/*! exports provided: PasswordErrorStateMatcher, UserAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordErrorStateMatcher", function() { return PasswordErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountComponent", function() { return UserAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_main_enrichment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/main/enrichment.service */ "./src/app/shared/main/enrichment.service.ts");
/* harmony import */ var _auth_user_current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/user/current-user.service */ "./src/app/auth/user/current-user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var PasswordErrorStateMatcher = /** @class */ (function () {
    function PasswordErrorStateMatcher() {
    }
    PasswordErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        var invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return (invalidCtrl || invalidParent);
    };
    return PasswordErrorStateMatcher;
}());

var UserAccountComponent = /** @class */ (function () {
    function UserAccountComponent(service, currentUser, formBuilder, snackbar) {
        this.service = service;
        this.currentUser = currentUser;
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
        this.changePasswordToggle = false;
        this.matcher = new PasswordErrorStateMatcher();
        this.changePasswordForm = this.formBuilder.group({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)]),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            newPassword2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        }, { validator: this.checkPasswords });
    }
    UserAccountComponent.prototype.ngOnInit = function () {
        this.userFirstName = this.currentUser.getUser().firstName;
        this.userLastName = this.currentUser.getUser().lastName;
        this.userName = this.currentUser.getUser().username;
        this.userDepartment = this.currentUser.getUser().department;
    };
    UserAccountComponent.prototype.changePassword = function () {
        var _this = this;
        this.service.changePassword(this.currentUser.getUser().id, this.userName, this.changePasswordForm).subscribe(function (data) {
            _this.snackbar.open(data.error ? data.errorMsg : data.message, 'OK', {
                duration: 3000
            });
            _this.formDirective.reset();
            _this.changePasswordToggle = false;
        }, function (err) {
            _this.snackbar.open('HTTP error when changing passwords', 'OK', {
                duration: 3000
            });
            console.error('error changing passwords:', err);
        });
    };
    UserAccountComponent.prototype.toggleChangePassword = function (isOpen) {
        this.changePasswordToggle = isOpen;
        this.formDirective.resetForm();
    };
    UserAccountComponent.prototype.getErrorMsg = function (formControlName) {
        if (this.changePasswordForm.get(formControlName).hasError('required')) {
            return 'Input is required.';
        }
        else if (this.changePasswordForm.get(formControlName).hasError('maxlength')) {
            return 'Input exceeds max length.';
        }
        else if (this.changePasswordForm.get(formControlName).hasError('notSame')) {
            return 'New passwords need to match';
        }
        else {
            return 'Invalid input.';
        }
    };
    UserAccountComponent.prototype.checkPasswords = function (group) {
        var pass = group.controls.newPassword.value;
        var confirmPass = group.controls.newPassword2.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formDirective'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], UserAccountComponent.prototype, "formDirective", void 0);
    UserAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-account',
            template: __webpack_require__(/*! ./user-account.component.html */ "./src/app/user-account/user-account.component.html"),
            styles: [__webpack_require__(/*! ./user-account.component.scss */ "./src/app/user-account/user-account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_main_enrichment_service__WEBPACK_IMPORTED_MODULE_2__["EnrichmentService"],
            _auth_user_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], UserAccountComponent);
    return UserAccountComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Zach\Documents\aSpring2019\Capstone\PGB-Angular\BehavioralEnrichment-Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map