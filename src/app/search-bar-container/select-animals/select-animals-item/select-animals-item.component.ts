import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-animals-item',
  templateUrl: './select-animals-item.component.html',
  styleUrls: ['./select-animals-item.component.scss']
})
export class SelectAnimalsItemComponent implements OnInit {

  @Input() animalType?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
