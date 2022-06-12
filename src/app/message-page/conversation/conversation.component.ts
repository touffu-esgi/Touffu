import { Component, OnInit } from '@angular/core';

export class Message {
  fromMe: boolean;
  value: string;

  constructor(fromMe: boolean, value: string) {
    this.fromMe = fromMe;
    this.value = value;
  }
}

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  messages: Message[] = [
    new Message(true, 'L\'état qui engendre la règle est différent de celui\n'+
      'que la règle engendre.'),
    new Message(false, 'GnGnGn'),
    new Message(true, 'Tu as raison, comme toujours'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
