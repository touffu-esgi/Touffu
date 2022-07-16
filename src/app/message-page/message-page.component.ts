import { Component, OnInit } from '@angular/core';
import {MessageService} from "../services/messages/message.service";
import {Conversation} from "../domaine/message/conversation";
import {Message} from "../domaine/message/message";
import { AuthService } from '../services/auth/auth.service';
import { HttpUtils } from '../utils/http.utils';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss']
})
export class MessagePageComponent implements OnInit {

  public conversations: Conversation[] = [];
  public messages: Message[] = [];
  public id_receiver: string = "";
  public id_sender: string = "";
  constructor(private messageService: MessageService, private authService: AuthService, private httpUtils: HttpUtils, private activatedRoute: ActivatedRoute) { }
  public sender: string = "";

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params["name"]){
        this.getConversations(params["name"]);
      }else{
        this.getConversations();
      }
    })

  }

  private getConversations(reciverName?: string) {
    this.messageService.getConversation(this.authService.user!.userReference!.split('/').pop()!).subscribe(conversations => {
      this.conversations = conversations;
      if (history.state && history.state[0]){
        this.id_receiver = history.state[0];
        this.id_sender = this.authService.user!.id!;
        this.createNewConversation(reciverName)
      }
    })
  }

  private createNewConversation(reciverName: string = "") {
    this.conversations!.push(new Conversation(`${this.httpUtils.fullUrl()}/message/${this.id_sender}/${this.id_receiver}`,"Aucun message envoyé",reciverName,[]))
  }

  displayMessages(messages: [Message[], string, string, string]) {
    this.messages = messages[0];
    this.id_receiver = messages[1];
    this.id_sender = messages[2];
    this.sender = messages[3];
  }
}
