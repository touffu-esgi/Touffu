import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Conversation} from "../../domaine/message/conversation";
import {MessageService} from "../../services/messages/message.service";
import {Message} from "../../domaine/message/message";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-conversations-list',
  templateUrl: './conversations-list.component.html',
  styleUrls: ['./conversations-list.component.scss']
})
export class ConversationsListComponent implements OnInit {
  @Output() onMessagePicked: EventEmitter<[Message[], string, string]> = new EventEmitter();
  @Input() conversations: Conversation[] = [];
  private messagesSubscription?: Subscription;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {}

  displayMessages(conversation: string) {
    this.messagesSubscription = this.messageService.getMessages(conversation).subscribe(messages =>{
      messages.forEach(message => {
        message.senderId = message.senderId.split("/")[4]
        message.recipientId = message.recipientId.split("/")[4]
      })
      const messagesAndReciver: [Message[], string, string] = [messages, conversation.split("/")[5], conversation.split("/")[4]]
      this.onMessagePicked.emit(messagesAndReciver);
    },
      error => {
        const messagesAndReciver: [Message[], string, string] = [[], conversation.split("/")[5], conversation.split("/")[4]]
        this.onMessagePicked.emit(messagesAndReciver);
      });
  }

  ngOnDestroy() {
    this.messagesSubscription?.unsubscribe();
  }
}
