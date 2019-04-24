import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../../globals';
import { IncidentReportForm } from '../interfaces/incident-report-form';
import { FormGroup } from '@angular/forms';
import { SpeciesInfo } from '../interfaces/species-info';
import { StandardReturnObject } from '../interfaces/standard-return-object';
import { DepartmentInfo } from '../interfaces/department-info';
import { ItemInfo } from '../interfaces/item-info';
import { AnimalInfo } from '../interfaces/animal-info';
import { LocationInfo } from '../interfaces/location-info';
import { UserListInfo } from '../interfaces/user-list-info';


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
export class IncidentService {
  constructor(private http: HttpClient, private globals: Globals) { }

  signUp(username: string, password: string) {
    const requestBody = {
      username,
      password
    };
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/signUpUser`, requestBody, httpOptions);
  }

  submitIncidentReportForm(completeForm: IncidentReportForm) {
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/enrichmentRequest`, completeForm, httpOptions);
  }

  getDepartments() {
    return this.http.get<DepartmentInfo[]>(`${this.globals.baseUrl}/departments`);
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

  getAnimals() {
    return this.http.get<AnimalInfo[]>(`${this.globals.baseUrl}/animals`);
  }

  getLocations() {
    return this.http.get<LocationInfo[]>(`${this.globals.baseUrl}/locations`);
  }
}