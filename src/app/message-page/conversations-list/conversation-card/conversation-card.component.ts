import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-conversation-card',
  templateUrl: './conversation-card.component.html',
  styleUrls: ['./conversation-card.component.scss']
})
export class ConversationCardComponent implements OnInit {

  @Input() isSelected = false;

  constructor() { }

  ngOnInit(): void {
  }

}
