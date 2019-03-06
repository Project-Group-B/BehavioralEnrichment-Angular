import { Injectable } from '@angular/core';
import { UserPermissions } from 'src/app/shared/interfaces/user-info';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  private username = '';
  private firstName = '';
  private lastName = '';
  private isAdmin = false;
  private permissions: UserPermissions = {canRead: false, canEdit: false, canDelete: false};
  private sessionId = '';
  private departmentId = '';

  constructor() { }

  setUserName(name: string) {
    this.username = name;
  }
  setFirstName(first: string) {
    this.firstName = first;
  }
  setLastName(last: string) {
    this.lastName = last;
  }
  setIsAdmin(admin: boolean) {
    this.isAdmin = admin;
  }
  setPermissions(permissions: UserPermissions) {
    this.permissions = permissions;
  }
  setCanRead(read: boolean) {
    this.permissions.canRead = read;
  }
  setCanEdit(edit: boolean) {
    this.permissions.canEdit = edit;
  }
  setCanDelete(deletePermission: boolean) {
    this.permissions.canDelete = deletePermission;
  }
  setSessionId(id: string) {
    this.sessionId = id;
  }
  setDepartmentId(id: string) {
    this.departmentId = id;
  }
  getUsername(): string {
    return this.username;
  }
  getFirstName(): string {
    return this.firstName;
  }
  getLastName(): string {
    return this.lastName;
  }
  adminUser(): boolean {
    return this.isAdmin;
  }
  canRead(): boolean {
    return this.permissions.canRead;
  }
  canEdit(): boolean {
    return this.permissions.canEdit;
  }
  canDelete(): boolean {
    return this.permissions.canDelete;
  }
  getSessionId(): string {
    return this.sessionId;
  }
  getDepartmentId(): string {
    return this.departmentId;
  }
}
