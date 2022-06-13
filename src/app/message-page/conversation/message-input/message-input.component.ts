import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Message} from "../../../domaine/message/message";

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {
  @Output() UpdateMessage: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateParentMessage(value: string){
    this.UpdateMessage.emit(value)
  }

}
