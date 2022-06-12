import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../conversation.component";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: Message = new Message(true, '') ;

  constructor() { }

  ngOnInit(): void {
  }

}
