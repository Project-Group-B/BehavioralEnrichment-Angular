import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Globals } from '../../globals';
import { CompleteRequestForm } from '../interfaces/complete-request-form';
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
import { ApprovedEntry } from '../interfaces/approved-entry';
import { EnrichmentForm } from '../interfaces/enrichment-form';

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

@Injectable({
  providedIn: 'root'
})
export class EnrichmentService {
  constructor(
    private http: HttpClient,
    private globals: Globals,
    private currentUser: CurrentUserService) { }

  addUser(form: FormGroup) {
    const requestBody = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      username: form.value.username,
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

  addDepartment(departmentName: string) {
    const requestBody = {
      departmentName
    };
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/newDept`, requestBody, httpOptions);
  }

  removeDepartmentById(departmentId: number) {
    const requestBody = {
      departmentId
    };
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/removeDept`, requestBody, httpOptions);
  }

  addSpecies(newSpeciesForm: FormGroup) {
    const requestBody = {
      speciesName: newSpeciesForm.value.speciesName,
      speciesDescription: newSpeciesForm.value.speciesDescription
    };
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/addSpecies`, requestBody, httpOptions);
  }

  removeSpeciesbyId(speciesId: number) {
    const requestBody = {
      speciesId
    };
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/removeSpecies`, requestBody, httpOptions);
  }

  addCategory(cat: FormGroup) {
    const requestBody = {
      categoryName: cat.value.catName,
      categoryDescription: cat.value.catDescription
    };
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/addCategory`, requestBody, httpOptions);
  }

  deactivateUsers(users: UserListInfo[]) {
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/removeUsers`, users, httpOptions);
  }

  reactivateUsers(users: UserListInfo[]) {
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/reactivateUsers`, users, httpOptions);
  }

  resetPasswords(users: UserListInfo[]) {
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/resetUserPasswords`, users, httpOptions);
  }

  editUser(user: FormGroup) {
    const requestBody = {
      firstName: user.value.firstName,
      lastName: user.value.lastName,
      username: user.value.username,
      userId: user.value.userId,
      department: user.value.department,
    };
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/editUser`, requestBody, httpOptions);
  }

  uploadNewHomepageImage(imageForm: FormGroup) {
    const requestBody: ImageInfo = {
      base64EncodedImage: imageForm.value.image
    };
    return this.http.post<StandardReturnObject>(`${this.globals.baseUrl}/homepageImage`, requestBody);
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

  getApprovedEntry() {
    return this.http.get<ApprovedEntry[]>(`${this.globals.baseUrl}/approvedEntries`);
  }

  getEnrichmentForm() {
    return this.http.get<EnrichmentForm[]>(`${this.globals.baseUrl}/getEnrichmentForm`);
  }

}
