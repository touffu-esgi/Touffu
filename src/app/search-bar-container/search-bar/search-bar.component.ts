import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() animalType: string = "";
  @Input() city: string = "";

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.city)
  }

  setCity(value: string) {
    this.city = value;
  }
}
