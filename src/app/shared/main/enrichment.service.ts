import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../../globals';
import { CompleteRequestForm } from '../interfaces/complete-request-form';

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

  signUp(username: string, password: string) {
    const requestBody = {
      username,
      password
    };
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/signUpUser`, requestBody, httpOptions);
  }

  submitEnrichmentRequestForm(completeForm: CompleteRequestForm) {
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/enrichmentRequest`, completeForm, httpOptions);
  }
}
