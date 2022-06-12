import {Component, Input, OnInit} from '@angular/core';
import {Conversation} from "../../../domaine/message/conversation";

@Component({
  selector: 'app-conversation-card',
  templateUrl: './conversation-card.component.html',
  styleUrls: ['./conversation-card.component.scss']
})
export class ConversationCardComponent implements OnInit {

  @Input() isSelected = false;
  @Input() conversation?: Conversation;
  constructor() { }

  ngOnInit(): void {
  }

}
