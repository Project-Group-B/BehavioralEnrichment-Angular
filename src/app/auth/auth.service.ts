import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Globals } from '../globals';
import { UserInfo } from '../shared/interfaces/user-info';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public redirectUrl: string;
  constructor(private http: HttpClient, private globals: Globals) { }

  // https://stackoverflow.com/a/53528644
  loginUser(username: string, password: string): Observable<UserInfo> {
    const requestbody = {
      username,
      password
    };
    return this.http.post<UserInfo>(`${this.globals.baseUrl}/loginUser`, requestbody, httpOptions);
  }
}
