import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal/animal.service';


@Component({
  selector: 'app-select-animals',
  templateUrl: './select-animals.component.html',
  styleUrls: ['./select-animals.component.scss']
})
export class SelectAnimalsComponent implements OnInit {

  constructor(private animalService: AnimalService) { }

  animalTypes: string[] = [];

  ngOnInit(): void {
    this.getAnimalTypes();
  }

  private getAnimalTypes() {
    this.animalService.getAnimalType().subscribe(animalTypes => this.animalTypes = animalTypes);
  }
}
