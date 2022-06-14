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

  public conversations: Conversation[] = [];
  public messages: Message[] = [];
  public id_reciver: string = "";
  public id_sender: string = "";
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

    this.getConversations();
  }

  private getConversations() {
    this.messageService.getConversation("1").subscribe(conversations => {
      this.conversations = conversations;
      if (history.state && history.state[0]){
        this.id_reciver = history.state[0];
        this.id_sender = '1';
        this.createNewConversation()
      }
    })
  }

  private createNewConversation() {
    this.conversations!.push(new Conversation(`http://localhost:3000/message/${this.id_sender}/${this.id_reciver}`,"",[]))
  }

  displayMessages(messages: [Message[], string, string]) {
    this.messages = messages[0];
    this.id_reciver = messages[1];
    this.id_sender = messages[2];
  }
}
