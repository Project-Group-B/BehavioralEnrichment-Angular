import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CompleteRequestForm } from 'src/app/request-form/request-form.component';
import { globals } from '../../globals';

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
  constructor(private http: HttpClient) { }

  signUp(username: string, password: string) {
    const requestBody = {
      username,
      password
    };
    return this.http.post<StandardReturnObject>(`${globals.baseUrl}/signUpUser`, requestBody, httpOptions);
  }

  submitEnrichmentRequestForm(completeForm: CompleteRequestForm) {
    return this.http.post<StandardReturnObject>(`${globals.baseUrl}/enrichmentRequest`, completeForm, httpOptions);
  }
}
