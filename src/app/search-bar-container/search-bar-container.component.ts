import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar-container',
  templateUrl: './search-bar-container.component.html',
  styleUrls: ['./search-bar-container.component.scss']
})
export class SearchBarContainerComponent implements OnInit {
  animalType: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  saveCurrentAnimalType(animalType: string) {
    this.animalType = animalType;
  }
}
