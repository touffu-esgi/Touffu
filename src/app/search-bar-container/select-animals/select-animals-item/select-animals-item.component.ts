import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-animals-item',
  templateUrl: './select-animals-item.component.html',
  styleUrls: ['./select-animals-item.component.scss']
})
export class SelectAnimalsItemComponent implements OnInit {
  @Output() selected: EventEmitter<string> = new EventEmitter<string>()
  @Input() animal: string = "";
  constructor() { }

  ngOnInit(): void {
  }


  selectAnimalType(type: string){
    this.selected.emit(type);
  }
}
