import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../../globals';
import { CompleteRequestForm } from '../interfaces/complete-request-form';
import { FormGroup } from '@angular/forms';
import { SpeciesInfo } from '../interfaces/species-info';
import { StandardReturnObject } from '../interfaces/standard-return-object';
import { CategoryInfo } from '../interfaces/category-info';
import { DepartmentInfo } from '../interfaces/department-info';
import { ItemInfo } from '../interfaces/item-info';
import { UserListInfo } from '../interfaces/user-list-info';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EnrichmentService {
  constructor(private http: HttpClient, private globals: Globals) { }

  addUser(form: FormGroup) {
    const requestBody = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      username: form.value.username,
      password: form.value.password,
      status: 0,
      department: form.value.department
    };
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/addUser`, requestBody, httpOptions);
  }

  submitEnrichmentRequestForm(completeForm: CompleteRequestForm) {
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/enrichmentRequest`, completeForm, httpOptions);
  }

  submitNewItem(itemForm: FormGroup) {
    const requestBody = {
      itemName: itemForm.value.name,
      photo: itemForm.value.photo,
      comments: itemForm.value.comments,
      safetyNotes: itemForm.value.safetyNotes,
      exceptions: itemForm.value.exceptions
    };
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/newItem`, requestBody, httpOptions);
  }

  removeUsers(users: UserListInfo[]) {
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/removeUsers`, users, httpOptions);
  }

  getDepartments() {
    return this.http.get<DepartmentInfo[]>(`${this.globals.baseUrl}/departments`);
  }

  getCategories() {
    return this.http.get<CategoryInfo[]>(`${this.globals.baseUrl}/categories`);
  }

  getSpecies() {
    return this.http.get<SpeciesInfo[]>(`${this.globals.baseUrl}/species`);
  }

  getItems() {
    return this.http.get<ItemInfo[]>(`${this.globals.baseUrl}/items`);
  }

  getUsers() {
    return this.http.get<UserListInfo[]>(`${this.globals.baseUrl}/userList`);
  }
}
