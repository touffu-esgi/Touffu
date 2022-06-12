import { Component, OnInit } from '@angular/core';
import {MessageService} from "../services/messages/message.service";
import {Conversation} from "../domaine/message/conversation";

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss']
})
export class MessagePageComponent implements OnInit {

  public conversations?: Conversation;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.getConversation("1").subscribe(conversations => {
      console.log(conversations)
    })
  }

}
