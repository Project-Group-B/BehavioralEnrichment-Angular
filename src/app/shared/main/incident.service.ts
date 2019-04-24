import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../../globals';
import { IncidentReportForm } from '../interfaces/incident-report-form';
import { FormGroup } from '@angular/forms';
import { SpeciesInfo } from '../interfaces/species-info';
import { StandardReturnObject } from '../interfaces/standard-return-object';
import { CategoryInfo } from '../interfaces/category-info';
import { DepartmentInfo } from '../interfaces/department-info';
import { ItemInfo } from '../interfaces/item-info';
import { UserListInfo } from '../interfaces/user-list-info';
import { AnimalInfo } from '../interfaces/animal-info';
import { LocationInfo } from '../interfaces/location-info';
import { EditUserInfo } from '../interfaces/edit-user-info';
import { CurrentUserService } from 'src/app/auth/user/current-user.service';
import { ImageInfo } from '../interfaces/image-info';
import { SubmittedIncident } from '../interfaces/incident-status';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const fileHttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/form-data'
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
  constructor(
    private http: HttpClient, 
    private globals: Globals,
    private currentUser: CurrentUserService) { }

  addUser(form: FormGroup) {
    const requestBody = {
      
    };
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/addUser`, requestBody, httpOptions);
  }

  submitIncidentReportForm(completeForm: IncidentReportForm) {
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/incidentReport`, completeForm, httpOptions);
  }

  //from Donovan's code
  submitNewItem(itemForm: FormGroup) {
    const requestBody = {
      itemName: itemForm.value.name,
      base64EncodedPhoto: itemForm.value.photo,
      comments: itemForm.value.comments,
      safetyNotes: itemForm.value.safetyNotes,
      exceptions: itemForm.value.exceptions,
      submittor: this.currentUser.getUser().id
    };
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/newItem`, requestBody);
  }

  submitNewAnimal(animalForm: FormGroup) {
    const requestBody = {
      isisNumber: animalForm.value.isisNumber,
      species: animalForm.value.species,
      location: animalForm.value.location,
      housed: animalForm.value.housed,
      activityCycle: animalForm.value.activityCycle,
      age: animalForm.value.age
    };
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/newAnimal`, requestBody, httpOptions);
  }

  changePassword(userId: number, userName: string, passForm: FormGroup) {
    const requestBody = {
      userId,
      userName,
      oldPassword: passForm.value.oldPassword,
      newPassword: passForm.value.newPassword
    };
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/changePassword`, requestBody, httpOptions);
  }

  getHomepageImage() {
    return this.http.get<ImageInfo>(`${this.globals.baseUrl}/getHomepageImage`);
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

  getAnimals() {
    return this.http.get<AnimalInfo[]>(`${this.globals.baseUrl}/animals`);
  }

  getLocations() {
    return this.http.get<LocationInfo[]>(`${this.globals.baseUrl}/locations`);
  }

  getIncidentReport(){
    return this.http.get<SubmittedIncident[]>(`${this.globals.baseUrl}/incidentStatusReports`);
  }


}