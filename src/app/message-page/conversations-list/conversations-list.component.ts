import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Conversation} from "../../domaine/message/conversation";
import {MessageService} from "../../services/messages/message.service";
import {Message} from "../../domaine/message/message";


@Component({
  selector: 'app-conversations-list',
  templateUrl: './conversations-list.component.html',
  styleUrls: ['./conversations-list.component.scss']
})
export class ConversationsListComponent implements OnInit {
  @Output() onMessagePicked: EventEmitter<[Message[], string, string]> = new EventEmitter();
  @Input() conversations: Conversation[] = [];
  constructor() { }

  ngOnInit(): void {

  }


  displayMessages(messages: Message[], conversation: string) {
  const messagesAndReciver: [Message[], string, string] = [messages, conversation.split("/")[5], conversation.split("/")[4]]
    this.onMessagePicked.emit(messagesAndReciver);
  }
}
