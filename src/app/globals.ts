import { Injectable } from '@angular/core';

// To change in a file, create a function and set it to something like this:
/*
import {Globals} from '...';
constructor(private globals: Globals)
private changed() {
  this.globals.baseUrl = '';
}
*/
@Injectable({
  providedIn: 'root'
})
export class Globals {
  readonly sessionIdKey = 'behavior-enrichment-session';
  readonly baseUrl = 'http://localhost:8080';
}
