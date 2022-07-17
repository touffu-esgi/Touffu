import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal/animal.service';
import { SelectSearchBarEventService } from '../../services/focus/select-search-bar-event.service';


@Component({
  selector: 'app-select-animals',
  templateUrl: './select-animals.component.html',
  styleUrls: ['./select-animals.component.scss']
})
export class SelectAnimalsComponent implements OnInit {

  constructor(private animalService: AnimalService, public selectSearchBarEventService: SelectSearchBarEventService) { }

  animalTypes: string[] = [];
  focus: boolean = false;
  ngOnInit(): void {
    this.focus = this.selectSearchBarEventService.focus;
    this.getAnimalTypes();
  }

  private getAnimalTypes() {
    this.animalService.getAnimalType().subscribe(animalTypes => this.animalTypes = animalTypes);
  }
}
