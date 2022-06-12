import {Component, Input, OnInit} from '@angular/core';

import {Message} from "../../domaine/message/message";


@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  @Input() messages?: Message[];

  constructor() { }

  ngOnInit(): void {
  }

}
