import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-recurency',
  templateUrl: './select-recurency.component.html',
  styleUrls: ['./select-recurency.component.scss']
})
export class SelectRecurencyComponent implements OnInit {
  @Output() recurrence = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }


  pushRecurrence(recurrence: string) {
    this.recurrence.emit(recurrence)
  }
}
