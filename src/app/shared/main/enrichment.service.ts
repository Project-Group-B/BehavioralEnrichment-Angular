import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../../globals';
import { CompleteRequestForm } from '../interfaces/complete-request-form';
import { FormGroup } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

export interface StandardReturnObject {
  message: string;
  error: boolean;
  errorMsg: string;
}

@Injectable({
  providedIn: 'root'
})
export class EnrichmentService {
  constructor(private http: HttpClient, private globals: Globals) { }

  signUp(form: FormGroup) {
    const requestBody = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      username: form.value.username,
      password: form.value.password,
      status: 0,
      department: form.value.department
    };
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/signUpUser`, requestBody, httpOptions);
  }

  getDepartments() {
    return this.http.get<DepartmentInfo[]>(`${this.globals.baseUrl}/departments`);
  }

  submitEnrichmentRequestForm(completeForm: CompleteRequestForm) {
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/enrichmentRequest`, completeForm, httpOptions);
  }
}
