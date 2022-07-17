import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-and-text-home',
  templateUrl: './find-service-provider.component.html',
  styleUrls: ['./find-service-provider.component.scss']
})
export class FindServiceProviderComponent implements OnInit {
  animalType: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  saveCurrentAnimalType(animalType: string) {
    this.animalType = animalType;
  }
}
