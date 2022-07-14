import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar-city-selector',
  templateUrl: './search-bar-city-selector.component.html',
  styleUrls: ['./search-bar-city-selector.component.scss']
})
export class SearchBarCitySelectorComponent implements OnInit {

  @Input() city: string = "test"
  @Output() cityEmitter: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  changeCity(city: string) {
    console.log(city)
    this.cityEmitter.emit(city)
  }

}
