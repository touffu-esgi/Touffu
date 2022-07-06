import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar-find-button',
  templateUrl: './search-bar-find-button.component.html',
  styleUrls: ['./search-bar-find-button.component.scss']
})
export class SearchBarFindButtonComponent implements OnInit {
  @Input() animalType: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
