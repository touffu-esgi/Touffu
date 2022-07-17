import { Component, OnInit } from '@angular/core';
import { SelectSearchBarEventService } from '../../../services/focus/select-search-bar-event.service';

@Component({
  selector: 'app-search-bar-animal-selector',
  templateUrl: './search-bar-animal-selector.component.html',
  styleUrls: ['./search-bar-animal-selector.component.scss']
})
export class SearchBarAnimalSelectorComponent implements OnInit {

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
