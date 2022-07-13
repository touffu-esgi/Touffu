import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-animals',
  templateUrl: './select-animals.component.html',
  styleUrls: ['./select-animals.component.scss']
})
export class SelectAnimalsComponent implements OnInit {
  @Output() animalType: EventEmitter<string> = new EventEmitter<string>()
  animals: string[] = ["chat", "chien", "chameau"]
  constructor() { }

  ngOnInit(): void {
  }

  pushAnimalType(type: string){
    this.animalType.emit(type);
  }

}
