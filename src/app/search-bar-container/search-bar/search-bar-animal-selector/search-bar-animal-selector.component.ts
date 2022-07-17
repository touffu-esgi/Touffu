import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar-animal-selector',
  templateUrl: './search-bar-animal-selector.component.html',
  styleUrls: ['./search-bar-animal-selector.component.scss']
})
export class SearchBarAnimalSelectorComponent implements OnInit {
  @Input() animalType: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
