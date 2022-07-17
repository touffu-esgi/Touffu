import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar-find-button',
  templateUrl: './search-bar-find-button.component.html',
  styleUrls: ['./search-bar-find-button.component.scss']
})
export class SearchBarFindButtonComponent implements OnInit {
  @Input() animalType: string = "";
  @Input() city: string = '';
  constructor() { }

  ngOnInit(): void {}

  setQueryParams (): {t?: string, c?: string} {
    const queryParams: {t?: string, c?: string} = {};
    if (this.animalType.length > 0) {
      queryParams.t = this.animalType;
    }
    if (this.city.length > 0) {
      queryParams.c = this.city
    }
    return queryParams;
  }

  setCity(value: string) {
    this.city = value
  }
}
