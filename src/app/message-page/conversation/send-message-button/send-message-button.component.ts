import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from "../../../domaine/message/message";

@Component({
  selector: 'app-send-message-button',
  templateUrl: './send-message-button.component.html',
  styleUrls: ['./send-message-button.component.scss']
})
export class SendMessageButtonComponent implements OnInit {

  @Input() id_sender?: string;
  @Input() id_reciver?: string;
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    console.log(this.id_sender, this.id_reciver)
  }

}
