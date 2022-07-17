import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectSearchBarEventService } from '../../../services/focus/select-search-bar-event.service';

@Component({
  selector: 'app-select-animals-item',
  templateUrl: './select-animals-item.component.html',
  styleUrls: ['./select-animals-item.component.scss']
})
export class SelectAnimalsItemComponent implements OnInit {
  @Output() selected: EventEmitter<string> = new EventEmitter<string>()
  @Input() animal: string = "";
  @Input() animalType?: string;
  constructor() { }

  ngOnInit(): void {
  }


  selectAnimalType(type: string){
    this.selected.emit(type);
  }
}
