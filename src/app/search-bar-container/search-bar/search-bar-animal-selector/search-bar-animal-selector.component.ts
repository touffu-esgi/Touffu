import { SelectSearchBarEventService } from '../../../services/focus/select-search-bar-event.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar-animal-selector',
  templateUrl: './search-bar-animal-selector.component.html',
  styleUrls: ['./search-bar-animal-selector.component.scss']
})
export class SearchBarAnimalSelectorComponent implements OnInit {
  @Input() animalType: string = "";

  constructor(private selectSearchBarEventService: SelectSearchBarEventService) { }

  ngOnInit(): void {
  }

  focus() {
    this.selectSearchBarEventService.focus = true;
  }

  focusOut() {
    this.selectSearchBarEventService.focus = false;
  }
}
