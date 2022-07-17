import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectSearchBarEventService {
  focus: boolean = false;
  constructor() { }
}
