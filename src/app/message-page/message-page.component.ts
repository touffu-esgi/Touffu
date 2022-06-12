import { Component, OnInit } from '@angular/core';
import {MessageService} from "../services/messages/message.service";
import {Conversation} from "../domaine/message/conversation";
import {Message} from "../domaine/message/message";

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss']
})
export class MessagePageComponent implements OnInit {

  public conversations?: Conversation[];
  public messages: Message[] = [];
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
        this.messageService.getConversation("1").subscribe(conversations => {
      this.conversations = conversations;
      this.setUpMessages();
    })
  }
  setUpMessages() {
    this.conversations!.forEach(conversation => {
      this.messageService.getMessages(conversation.conversation).subscribe(messages => {
        conversation.messages = messages;
        console.log(messages)
      })
    })
  }

  displayMessages(messages: Message[]) {
    this.messages = messages;
  }
}
