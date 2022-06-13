import {Component, Input, OnInit} from '@angular/core';

import {Message} from "../../domaine/message/message";
import {MessageService} from "../../services/messages/message.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  @Input() messages?: Message[];
  @Input() id_sender?: string;
  @Input() id_reciver?: string;
  sendMessageSubscriber?: Subscription;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  sendMessage(message: string) {
    this.sendMessageSubscriber = this.messageService.sendMessage(message, this.id_sender!, this.id_reciver!).subscribe();
    const url_user = `http://localhost:3000/user/`;
    this.messages?.push(new Message("",
      message, new Date(),
      url_user + this.id_sender! ,
      url_user + this.id_reciver!
    ))
  }

  onDestroy() {
    this.sendMessageSubscriber?.unsubscribe();
  }
}
