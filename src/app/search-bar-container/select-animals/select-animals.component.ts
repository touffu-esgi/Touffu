import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnimalService } from '../../services/animal/animal.service';
import { SelectSearchBarEventService } from '../../services/focus/select-search-bar-event.service';


@Component({
  selector: 'app-select-animals',
  templateUrl: './select-animals.component.html',
  styleUrls: ['./select-animals.component.scss']
})
export class SelectAnimalsComponent implements OnInit {
  @Output() animalType: EventEmitter<string> = new EventEmitter<string>()
  constructor(private animalService: AnimalService, public selectSearchBarEventService: SelectSearchBarEventService) { }

  animals: string[] = [];
  focus: boolean = false;
  ngOnInit(): void {
    this.focus = this.selectSearchBarEventService.focus;
    this.getAnimalTypes();
  }

  private getAnimalTypes() {
    this.animalService.getAnimalType().subscribe(animalTypes => this.animals = animalTypes);
  }
  pushAnimalType(type: string){
    this.animalType.emit(type);
  }

}
